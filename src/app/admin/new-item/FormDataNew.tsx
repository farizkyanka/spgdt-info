"use client";

import {
  FormTypeDataFaskes,
  useFormDataFaskesContext,
} from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import { useRouter } from "next/navigation";
import FormFaskesField from "@/components/forms/Data Faskes/FormFaskesField";

export default function FormDataFaskes() {
  const router = useRouter();

  const {
    formState: { isSubmitting },
    handleSubmit,
  } = useFormDataFaskesContext();

  const submitform = async (data: FormTypeDataFaskes) => {
    const sendData = JSON.stringify(data);
    console.log(data);
    try {
      const response = await fetch("/api/faskes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: sendData,
      });

      if (response.ok) {
        return router.push("/");
      }
    } catch (e) {
      throw new Error("error");
    }
  };

  return (
    <main className="flex justify-center">
      <section className="w-full m-2 p-2 max-w-screen-lg rounded-lg shadow-xl">
        <form
          onSubmit={handleSubmit((data) => {
            submitform(data);
          })}
        >
          <FormFaskesField />
          <button
            disabled={isSubmitting}
            type="submit"
            className=" m-2 p-2 text-xl text-white rounded bg-cyan-400"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
    </main>
  );
}
