"use client";

import FormAlamat from "@/components/forms/Data Faskes/FormAlamat";
import {
  FormTypeDataFaskes,
  useFormDataFaskesContext,
} from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import FasilitasDiagnostik from "@/components/forms/Data Faskes/FormFasilitasDiagnostik";
import FasilitasEmergensi from "@/components/forms/Data Faskes/FormFasilitasEmergensi";
import FasilitasTerapi from "@/components/forms/Data Faskes/FormFasilitasTerapi";
import FormRuangRawat from "@/components/forms/Data Faskes/FormRuangRawat";
import Spesialis from "@/components/forms/Data Faskes/FormSpesialis";
import { useRouter, useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const TipeFaskes = [
  "Rumah Sakit Tipe A",
  "Rumah Sakit Tipe B",
  "Rumah Sakit Tipe C",
  "Rumah Sakit Tipe D",
  "Klinik Utama Rawat Inap",
  "Klinik Utama Rawat Jalan",
  "Klinik Pratama Rawat Inap",
  "Klinik Pratama Rawat Jalan",
];

export default function FormDataFaskes() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useFormDataFaskesContext();

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
              <div className="flex flex-col md:w-1/2">
                <label htmlFor="nama faskes">Nama Faskes</label>
                <input {...register("nama faskes")} />
                <label htmlFor="kelas faskes">Kelas Faskes</label>
                <select
                  className="m-2 p-1 rounded-md"
                  {...register("kelas faskes")}
                >
                  {TipeFaskes.map((i, index) => {
                    return (
                      <option key={index} value={i}>
                        {i}
                      </option>
                    );
                  })}
                </select>
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
