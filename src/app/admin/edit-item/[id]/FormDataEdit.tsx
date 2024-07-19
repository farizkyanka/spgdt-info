"use client";

import FormAlamat from "@/components/forms/Data Faskes/FormAlamat";
import {
  FormTypeDataFaskes,
  useFormDataFaskesContext,
} from "@/components/forms/Data Faskes/formDataFaskesSchema";
import FasilitasDiagnostik from "@/components/forms/Data Faskes/FormFasilitasDiagnostik";
import FasilitasEmergensi from "@/components/forms/Data Faskes/FormFasilitasEmergensi";
import FasilitasTerapi from "@/components/forms/Data Faskes/FormFasilitasTerapi";
import FormRuangRawat from "@/components/forms/Data Faskes/FormRuangRawat";
import Spesialis from "@/components/forms/Data Faskes/FormSpesialis";
import { useRouter, useParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function FormDataFaskes() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useFormDataFaskesContext();

  const resetAsyncForm = useCallback(async () => {
    const result = await fetch(`http://localhost:3000/api/faskes/${params}`);
    try {
      if (!result.ok) return null;
      const data: { faskes: FormTypeDataFaskes } = await result.json();
      reset(data.faskes);
    } catch (e) {
      JSON.stringify(e);
    }
  }, [reset, params]);

  useEffect(() => {
    resetAsyncForm();
  }, [resetAsyncForm]);

  const submitform = async (data: FormTypeDataFaskes) => {
    const sendData = JSON.stringify(data);
    const response = await fetch(`/api/faskes/${params}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: sendData,
    });

    if (response.ok) {
      return router.push("/");
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
            <div className="flex flex-col md:w-1/2">
              <label htmlFor="nama faskes">Nama Faskes</label>
              <input {...register("nama faskes")} />
              <label htmlFor="kelas faskes">Kelas Faskes</label>
              <input {...register("kelas faskes")} />
              <FormAlamat />
              <label htmlFor="nomor spgdt">Nomor SPGDT</label>
              <input type="tel" {...register("nomor spgdt")} />
              <label htmlFor="BPJS">BPJS</label>
              <input type="checkbox" {...register("BPJS")} />
            </div>
            <div className="md:w-1/2">
              <FormRuangRawat />
            </div>
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
