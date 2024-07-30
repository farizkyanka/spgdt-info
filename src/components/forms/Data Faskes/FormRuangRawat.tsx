import { useFormDataFaskesContext } from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import { useFieldArray } from "react-hook-form";

export default function FormRuangRawat() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormDataFaskesContext();

  const { append, remove, fields } = useFieldArray({
    name: "ruangRawat",
    control,
  });

  return (
    <div className="flex flex-col">
      <label>Ruang Rawat</label>
      <ul>
        {fields.map((rg, rgIndex) => {
          return (
            <li
              key={rg.id}
              className="flex flex-wrap m-2 border-b-2 flex-shrink"
            >
              <select
                {...register(`ruangRawat.${rgIndex}.ruang`)}
                className="rounded-lg w-full sm:w-auto mb-2 p-2 border-2 border-blue-200 bg-white flex-grow"
              >
                <option value="PICU">PICU</option>
                <option value="NICU">NICU</option>
                <option value="ICU">ICU</option>
                <option value="HCU">HCU</option>
                <option value="Isolasi">Isolasi</option>
                <option value="Rawat Anak">Rawat Anak</option>
                <option value="Rawat Dewasa">Rawat Dewasa</option>
              </select>
              <input
                {...register(`ruangRawat.${rgIndex}.jumlah`)}
                type="number"
                className="rounded-lg w-full sm:w-auto mb-2 p-2 border-2 border-blue-200 bg-white flex-grow"
              />
              <button
                type="button"
                className="m-2 p-2 place-self-center rounded bg-cyan-400 text-white"
                onClick={() => remove(rgIndex)}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="ml-2 p-2 place-self-center rounded bg-cyan-400 text-white"
        onClick={() => append({ ruang: "", jumlah: 0 })}
      >
        tambah ruang rawat
      </button>
    </div>
  );
}
