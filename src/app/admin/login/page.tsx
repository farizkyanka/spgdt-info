import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { login } from "./action";

export default async function Page() {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }

  return (
    <form action={login}>
      <input
        className="border-2 rounded"
        type="text"
        name="username"
        id="username"
      />
      <input
        className="border-2 rounded"
        type="password"
        name="password"
        id="password"
      />
      <button type="submit">login</button>
    </form>
  );
}
