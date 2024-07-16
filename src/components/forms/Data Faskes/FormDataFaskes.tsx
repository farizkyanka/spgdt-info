"use client";

import { useFormDataFaskesContext } from "@/components/forms/Data Faskes/formDataFaskesSchema";
import FasilitasDiagnostik from "./FormFasilitasDiagnostik";
import FasilitasTerapi from "./FormFasilitasTerapi";
import FasilitasEmergensi from "./FormFasilitasEmergensi";
import Spesialis from "./FormSpesialis";
import FormRuangRawat from "./FormRuangRawat";
import FormAlamat from "./FormAlamat";

export default function FormDataFaskes() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormDataFaskesContext();

  return (
    <main className="flex justify-center">
      <section className="w-full m-2 p-2 max-w-screen-lg rounded-lg border-2">
        <form
          onSubmit={handleSubmit((data) => console.log(JSON.stringify(data)))}
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
