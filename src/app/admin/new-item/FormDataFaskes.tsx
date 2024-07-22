"use client";

import {
  FormTypeDataFaskes,
  useFormDataFaskesContext,
} from "@/components/forms/Data Faskes/formDataFaskesSchema";
import FasilitasDiagnostik from "../../../components/forms/Data Faskes/FormFasilitasDiagnostik";
import FasilitasTerapi from "../../../components/forms/Data Faskes/FormFasilitasTerapi";
import FasilitasEmergensi from "../../../components/forms/Data Faskes/FormFasilitasEmergensi";
import Spesialis from "../../../components/forms/Data Faskes/FormSpesialis";
import FormRuangRawat from "../../../components/forms/Data Faskes/FormRuangRawat";
import FormAlamat from "../../../components/forms/Data Faskes/FormAlamat";
import { useRouter } from "next/navigation";

export default function FormDataFaskes() {
  const router = useRouter();

  const {
    register,
    formState: { errors },
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

export const fetcher = async () => {
  const response = await fetch("http://localhost:3000/api/faskes");
  const data = await response.json();
  return data;
};
