import { provinsi } from "@/lib/FormProvinsi";
import { TipeFaskes } from "../forms/Data Faskes/FormIdFaskes";
import { listRuangRawat } from "./AdvancedSearch";
import { useFormSearchOptionsContext } from "./SearchBarSchema";

export default function SearchOptions() {
  const {
    register,
    formState: { errors },
  } = useFormSearchOptionsContext();
  return (
    <>
      <fieldset className="p-2 flex flex-wrap justify-around">
        <div className="m-2">
          <label htmlFor="provinsi" className="m-2">
            Provinsi
          </label>
          <select
            {...register("provinsi")}
            name="provinsi"
            className="p-1 rounded"
          >
            {provinsi.map((i, index) => {
              return (
                <option key={i.id} value={i.name}>
                  {i.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="m-2">
          <label htmlFor="kotakabupaten" className="m-2">
            Kota/Kabupaten
          </label>
          <select
            {...register("kotakabupaten")}
            name="kotakabupaten"
            className="p-1 rounded"
          >
            <option value={""}>blank</option>
          </select>
        </div>
      </fieldset>
      <fieldset className="p-2 flex justify-around">
        <fieldset className="flex flex-col">
          <label htmlFor="kelasFaskes">Kelas Faskes</label>
          <select {...register("kelasFaskes")} className="m-1 p-1 rounded">
            {TipeFaskes.map((i, index) => {
              return (
                <option key={index} id={i} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </fieldset>
        <fieldset className="flex flex-col">
          <h6>Ruang Rawat</h6>
          <select {...register("ruangRawat")} className="m-1 p-1 rounded">
            {listRuangRawat.map((i, index) => {
              return (
                <option key={index} id={i} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </fieldset>
      </fieldset>

      <fieldset className="flex flex-wrap justify-center place-items-center">
        <div>
          <h6>Fasilitas Terapi</h6>
          <input
            type="text"
            className="m-2 p-1 border-2 rounded"
            placeholder="test"
            {...register("fasilitasTerapi")}
          />
        </div>
        <div>
          <h6>Fasilitas Diagnostik</h6>
          <input
            type="text"
            className="m-2 p-1 border-2 rounded"
            placeholder="test"
            {...register("fasilitasDiagnostik")}
          />
        </div>
        <div>
          <h6>Fasilitas Kegawatdaruratan</h6>
          <input
            type="text"
            className="m-2 p-1 border-2 rounded"
            placeholder="test"
            {...register("fasilitasEmergensi")}
          />
        </div>
      </fieldset>
      <fieldset className="flex flex-wrap place-items-center justify-center">
        <div className="flex place-items-center">
          <h6>Spesialis</h6>
          <input
            type="text"
            className="m-2 p-1 border-2 rounded"
            placeholder="test"
            {...register("spesialis")}
          />
        </div>
        <div className="flex place-items-center">
          <h6>SubSpesialis</h6>
          <input
            type="text"
            className="m-2 p-1 border-2 rounded"
            placeholder="test"
            {...register("subspesialis")}
          />
        </div>
      </fieldset>
    </>
  );
}
