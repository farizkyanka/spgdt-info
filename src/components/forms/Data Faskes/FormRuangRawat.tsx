import { useFormDataFaskesContext } from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import { useFieldArray } from "react-hook-form";

export default function FormRuangRawat() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormDataFaskesContext();

  const { append, remove, fields } = useFieldArray({
    name: "ruang rawat",
    control,
  });

  return (
    <div>
      <label>Ruang Rawat</label>
      <ul>
        {fields.map((rg, rgIndex) => {
          return (
            <li key={rg.id}>
              <select {...register(`ruang rawat.${rgIndex}.ruang`)}>
                <option value="PICU">PICU</option>
                <option value="NICU">NICU</option>
                <option value="ICU">ICU</option>
                <option value="HCU">HCU</option>
                <option value="Isolasi">Isolasi</option>
                <option value="Rawat Anak">Rawat Anak</option>
                <option value="Rawat Dewasa">Rawat Dewasa</option>
              </select>
              <input
                {...register(`ruang rawat.${rgIndex}.jumlah`)}
                type="number"
                className="rounded border-2"
              />
              <button type="button" onClick={() => remove(rgIndex)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={() => append({ ruang: "", jumlah: 0 })}>
        tambah ruang rawat
      </button>
    </div>
  );
}
