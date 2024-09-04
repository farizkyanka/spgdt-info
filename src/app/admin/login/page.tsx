import LoginCard from "@/components/elements/LoginCard";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }

  return <LoginCard />;
}
