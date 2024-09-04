"use client";

import {
  FormTypeDataFaskes,
  useFormDataFaskesContext,
} from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import { useRouter } from "next/navigation";
import FormFaskesField from "@/components/forms/Data Faskes/FormFaskesField";
import { ReactHTMLElement } from "react";

export default function FormDataFaskes() {
  const router = useRouter();

  const {
    formState: { isSubmitting },
    handleSubmit,
  } = useFormDataFaskesContext();

  const submitform = async (data: FormTypeDataFaskes) => {
    const sendData = JSON.stringify(data);
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
    <main className="flex pt-20 justify-center">
      <section className="w-full bg-white m-2 p-2 max-w-screen-lg rounded-lg shadow-xl">
        <form
          className="flex flex-col"
          onSubmit={handleSubmit((data) => {
            submitform(data);
          })}
          onKeyDown={(e: any) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
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
