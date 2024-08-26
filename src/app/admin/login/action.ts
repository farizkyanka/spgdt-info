import { redirect } from "next/navigation";
import { lucia } from "@/lib/auth";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import dbConnect from "@/lib/dbConnect";
import { User } from "@/lib/authAdapter";

export async function login(formData: FormData) {
  "use server";

  const username = formData.get("username");
  const password = formData.get("password") as string;

  // you can use zod or any other library to validate the formData

  await dbConnect();
  const existingUser = await User.findOne({ username: username });

  await new Argon2id().verify(existingUser.password_hash, password);

  const session = await lucia.createSession(existingUser._id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/");
}
