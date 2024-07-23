"use client";

import {
  FormTypeDataFaskes,
  useFormDataFaskesContext,
} from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import FasilitasDiagnostik from "../../../components/forms/Data Faskes/FormFasilitasDiagnostik";
import FasilitasTerapi from "../../../components/forms/Data Faskes/FormFasilitasTerapi";
import FasilitasEmergensi from "../../../components/forms/Data Faskes/FormFasilitasEmergensi";
import Spesialis from "../../../components/forms/Data Faskes/FormSpesialis";
import { useRouter } from "next/navigation";
import FormIdFaskes from "@/components/forms/Data Faskes/FormIdFaskes";

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
    <main className="flex justify-center">
      <section className="w-full m-2 p-2 max-w-screen-lg rounded-lg border-2">
        <form
          onSubmit={handleSubmit((data) => {
            submitform(data);
          })}
        >
          <fieldset className="flex flex-row justify-evenly border-2 p-2">
            <legend>Data Faskes</legend>
            <FormIdFaskes />
          </fieldset>
          <fieldset className="flex flex-col border-2 p-2">
            <legend>Fasilitas Faskes</legend>
            <div className="m-2 flex justify-evenly">
              <FasilitasEmergensi />
              <FasilitasTerapi />
            </div>
            <div className="m-2 flex justify-evenly">
              <FasilitasDiagnostik />
              <Spesialis />
            </div>
          </fieldset>
          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
    </main>
  );
}
