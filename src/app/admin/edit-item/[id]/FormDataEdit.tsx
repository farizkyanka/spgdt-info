"use client";

import {
  FormTypeDataFaskes,
  useFormDataFaskesContext,
} from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import FasilitasDiagnostik from "@/components/forms/Data Faskes/FormFasilitasDiagnostik";
import FasilitasEmergensi from "@/components/forms/Data Faskes/FormFasilitasEmergensi";
import FasilitasTerapi from "@/components/forms/Data Faskes/FormFasilitasTerapi";
import FormIdFaskes from "@/components/forms/Data Faskes/FormIdFaskes";
import Spesialis from "@/components/forms/Data Faskes/FormSpesialis";
import { useRouter, useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function FormDataFaskes() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const { handleSubmit, reset } = useFormDataFaskesContext();

  const resetAsyncForm = useCallback(async () => {
    const result = await fetch(`http://localhost:3000/api/faskes/${params.id}`);
    try {
      if (!result.ok) return null;
      const data = await result.json();
      reset(data);
      setIsLoading(false);
    } catch (e) {
      JSON.stringify(e);
    }
  }, [reset, params]);

  useEffect(() => {
    resetAsyncForm();
  }, [resetAsyncForm]);

  const submitform = async (data: FormTypeDataFaskes) => {
    const sendData = JSON.stringify(data);
    const response = await fetch(`/api/faskes/${params.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: sendData,
    });

    if (response.ok) {
      const responseData = await response.json();
      return router.push(`/content/${responseData._id}`);
    }
  };

  if (isLoading) {
    return <div className="text-center">loading form...</div>;
  } else if (!isLoading)
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
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    );
}
