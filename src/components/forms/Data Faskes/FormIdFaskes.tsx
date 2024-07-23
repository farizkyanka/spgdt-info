import { useFormDataFaskesContext } from "./FormDataFaskesSchema";
import FormAlamat from "./FormAlamat";
import FormRuangRawat from "./FormRuangRawat";

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

export default function FormIdFaskes() {
  const {
    register,
    formState: { errors },
  } = useFormDataFaskesContext();

  return (
    <>
      <div className="flex flex-col md:w-1/2">
        <label htmlFor="nama faskes">Nama Faskes</label>
        <input {...register("namaFaskes")} />
        <label htmlFor="kelas faskes">Kelas Faskes</label>
        <select className="m-2 p-1 rounded-md" {...register("kelasFaskes")}>
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
        <input type="tel" {...register("nomorSPGDT")} />
        <label htmlFor="BPJS">BPJS</label>
        <input type="checkbox" {...register("BPJS")} />
      </div>
      <div className="md:w-1/2">
        <FormRuangRawat />
      </div>
    </>
  );
}
