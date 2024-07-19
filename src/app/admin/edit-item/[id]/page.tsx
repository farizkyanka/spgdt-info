"use client";

import { useFormDataFaskes } from "@/components/forms/Data Faskes/formDataFaskesSchema";
import { FormProvider } from "react-hook-form";
import FormDataEdit from "./FormDataEdit";

export default function Page() {
  const methods = useFormDataFaskes();

  return (
    <main>
      <FormProvider {...methods}>
        <FormDataEdit />
      </FormProvider>
    </main>
  );
}
