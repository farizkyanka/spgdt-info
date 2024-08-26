"use client";

import { useFormDataFaskes } from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import { FormProvider } from "react-hook-form";
import FormDataEdit from "./FormDataEdit";

export default function FormDataPage() {
  const methods = useFormDataFaskes();

  return (
    <main>
      <FormProvider {...methods}>
        <FormDataEdit />
      </FormProvider>
    </main>
  );
}
