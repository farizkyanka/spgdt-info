import FormDataFaskes from "@/components/forms/Data Faskes/FormDataFaskes";
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
