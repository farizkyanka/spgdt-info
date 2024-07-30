import { useFormDataFaskesContext } from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import { useFieldArray } from "react-hook-form";

export default function FasilitasEmergensi() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormDataFaskesContext();

  const { append, remove, fields } = useFieldArray({
    name: "fasilitasEmergensi",
    control,
  });

  return (
    <div className="mb-10 min-w-60 flex flex-col justify-start">
      <label>Fasilitas Emergensi</label>
      <ul>
        {fields.map((emg, emgIndex) => {
          return (
            <li
              key={emg.id}
              className="flex flex-wrap justify-around m-2 border-b-2"
            >
              <input
                {...register(`fasilitasEmergensi.${emgIndex}.unit`)}
                type="text"
                className="rounded-lg mb-2 p-2 border-2 border-blue-200 bg-white"
              />
              <button
                className="m-2 p-2 place-self-center rounded bg-cyan-400 text-white"
                type="button"
                onClick={() => remove(emgIndex)}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className="ml-2 p-2 place-self-center rounded bg-cyan-400 text-white"
        type="button"
        onClick={() => append({ unit: "" })}
      >
        tambah fasilitas emergensi
      </button>
    </div>
  );
}
