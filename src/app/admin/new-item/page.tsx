"use client";

import FormFasilitasDiagnostik from "@/components/FormFasilitasDiagnostik";
import FormFasilitasEmergensi from "@/components/FormFasilitasEmergensi";
import FormFasilitasTerapi from "@/components/FormFasilitasTerapi";

export default function Page(props: any) {
  return (
    <section className="flex justify-center">
      <form
        method={"POST"}
        className="mt-2 p-2 w-2/3 rounded-xl border-2 shadow-md"
      >
        <div className="flex flex-col flex-wrap">
          <label id="nama faskes">Nama Faskes</label>
          <input id="nama faskes" name="nama faskes" className="border-2" />
          <label id="tipe faskes">Tipe Faskes</label>
          <input id="tipe faskes" name="tipe faskes" className="border-2" />
          <label id="nomor faskes">Nomor Faskes</label>
          <input id="nomor faskes" name="nomor faskes" className="border-2" />
          <label id="alamat faskes">Alamat Faskes</label>
          <input id="alamat faskes" name="alamat faskes" className="border-2" />
        </div>
        <div className="flex flex-col w-1/2">
          <label id="picu">PICU</label>
          <input className="border-2" type="number" id="picu" name="picu" />
          <label id="nicu">NICU</label>
          <input className="border-2" type="number" id="nicu" name="nicu" />
          <label id="icu">ICU</label>
          <input className="border-2" type="number" id="icu" name="icu" />
          <label id="hcu">HCU</label>
          <input className="border-2" type="number" id="hcu" name="hcu" />
          <label id="isolasi">Isolasi</label>
          <input
            className="border-2"
            type="number"
            id="isolasi"
            name="isolasi"
          />
          <label id="anak">Rawat Anak</label>
          <input className="border-2" type="number" id="anak" name="anak" />
          <label id="dewasa">Rawat Dewasa</label>
          <input className="border-2" type="number" id="dewasa" name="dewasa" />
        </div>
        <FormFasilitasEmergensi />
        <FormFasilitasTerapi />
        <FormFasilitasDiagnostik />
      </form>
    </section>
  );
}
