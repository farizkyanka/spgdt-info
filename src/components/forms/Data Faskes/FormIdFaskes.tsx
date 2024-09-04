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
      <div className="flex flex-col justify-between p-4 text-lg">
        <label htmlFor="nama faskes">Nama Faskes</label>
        <input
          {...register("namaFaskes")}
          className="border-2 w-full rounded-lg border-blue-200 mb-2 p-2"
        />
        {errors.namaFaskes && (
          <h6 className="text-red-500">{errors.namaFaskes.message}</h6>
        )}
        <label htmlFor="kelas faskes">Kelas Faskes</label>
        <select
          {...register("kelasFaskes")}
          className="rounded-lg w-full mb-2 p-2 border-2 border-blue-200 bg-white"
        >
          {TipeFaskes.map((i, index) => {
            return (
              <option key={index} value={i}>
                {i}
              </option>
            );
          })}
          {errors.kelasFaskes && (
            <h6 className="text-red-500">{errors.kelasFaskes.message}</h6>
          )}
        </select>
        <FormAlamat />
        <div className="flex">
          <label htmlFor="nomor spgdt" className="place-self-center">
            Nomor SPGDT
          </label>
          <input
            type="tel"
            {...register("nomorSPGDT")}
            className="ml-2 w-full border-2 p-2 border-blue-200 rounded-md"
          />
        </div>
        {errors.nomorSPGDT && (
          <h6 className="text-red-500">{errors.nomorSPGDT.message}</h6>
        )}
        <div className="flex">
          <label htmlFor="nomor spgdt" className="place-self-center">
            Situs Resmi
          </label>
          <input
            {...register("situsWeb")}
            className="border-2 w-full rounded-lg border-blue-200 mb-2 p-2"
          />
        </div>

        <div className="flex">
          <label htmlFor="BPJS" className="place-self-center">
            BPJS
          </label>
          <input
            type="checkbox"
            {...register("BPJS")}
            className="m-2 h-8 w-8 border-2 rounded-md"
          />
        </div>
      </div>
      <div className="p-4">
        <FormRuangRawat />
      </div>
    </>
  );
}
