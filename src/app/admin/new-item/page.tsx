import FormDataFaskes from "@/app/admin/new-item/FormDataFaskes";
import { FormDataFaskesProvider } from "@/components/forms/Data Faskes/formDataFaskesSchema";

export default function Page() {
  return (
    <main>
      <FormDataFaskesProvider>
        <FormDataFaskes />
      </FormDataFaskesProvider>
    </main>
  );
}
