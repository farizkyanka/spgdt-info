import FormDataFaskes from "@/app/admin/new-item/FormDataNew";
import { FormDataFaskesProvider } from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const { user } = await validateRequest();
  if (user === null) {
    return redirect("/admin/login");
  }
  return (
    <main>
      <FormDataFaskesProvider>
        <FormDataFaskes />
      </FormDataFaskesProvider>
    </main>
  );
}
