import { useFormDataFaskesContext } from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import { useFieldArray } from "react-hook-form";

export default function FasilitasTerapi() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormDataFaskesContext();

  const { append, remove, fields } = useFieldArray({
    name: "fasilitasTerapi",
    control,
  });

  return (
    <div className="mb-10 min-w-60 flex flex-col justify-start">
      <label>Fasilitas Terapi</label>
      <ul>
        {fields.map((ter, terIndex) => {
          return (
            <li
              key={ter.id}
              className="flex flex-wrap justify-around m-2 border-b-2"
            >
              <input
                className="rounded-lg mb-2 p-2 border-2 border-blue-200 bg-white"
                {...register(`fasilitasTerapi.${terIndex}.unit`)}
                type="text"
              />
              <button
                className="m-2 p-2 place-self-center rounded bg-cyan-400 text-white"
                type="button"
                onClick={() => remove(terIndex)}
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
        tambah fasilitas terapi
      </button>
    </div>
  );
}
