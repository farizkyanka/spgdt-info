import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import FormDataPage from "./FormDataPage";

export default async function Page() {
  const { user } = await validateRequest();
  if (user === null) {
    return redirect("/admin/login");
  }

  return <FormDataPage />;
}
