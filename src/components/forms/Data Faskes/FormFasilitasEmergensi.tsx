import { useFormDataFaskesContext } from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import { useFieldArray } from "react-hook-form";

export default function FasilitasEmergensi() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormDataFaskesContext();

  const { append, remove, fields } = useFieldArray({
    name: "fasilitas emergensi",
    control,
  });

  return (
    <div>
      <label>Fasilitas Emergensi</label>
      <ul>
        {fields.map((emg, emgIndex) => {
          return (
            <li key={emg.id}>
              <input
                {...register(`fasilitas emergensi.${emgIndex}.unit`)}
                type="text"
                className="rounded border-2"
              />
              <button type="button" onClick={() => remove(emgIndex)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={() => append({ unit: "" })}>
        tambah fasilitas emergensi
      </button>
    </div>
  );
}
