import { useFormDataFaskesContext } from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import { useFieldArray } from "react-hook-form";

export default function Spesialis() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormDataFaskesContext();

  const { append, remove, fields } = useFieldArray({
    name: "spesialis",
    control,
  });

  return (
    <div className="min-w-60 flex flex-col">
      <label>Spesialis</label>
      <ul>
        {fields.map((sp, spIndex) => {
          return (
            <li className="m-2 border-b-2 p-2" key={sp.id}>
              <input
                {...register(`spesialis.${spIndex}.spesialisasi`)}
                type="text"
                className="flex-grow rounded-lg mb-2 p-2 border-2 border-blue-200 bg-white"
              />
              <Spesialisasi spIndex={spIndex} />
              <button
                className="ml-2 p-2 place-self-center rounded bg-cyan-400 text-white"
                type="button"
                onClick={() => remove(spIndex)}
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
        onClick={() => append({ spesialisasi: "", sub: [] })}
      >
        tambah spesialis
      </button>
    </div>
  );
}

const Spesialisasi = ({ spIndex }: { spIndex: number }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormDataFaskesContext();

  const { append, remove, fields } = useFieldArray({
    name: `spesialis.${spIndex}.sub`,
    control,
  });

  return (
    <div className="m-2 p-2 border-2 rounded-md">
      <label>Subspesialis</label>
      <ul>
        {fields.map((unit, unitIndex) => {
          return (
            <li key={unit.id} className="flex">
              <input
                {...register(`spesialis.${spIndex}.sub.${unitIndex}.sub`)}
                type="text"
                className="rounded-lg flex-shrink mb-2 p-2 border-2 border-blue-200 bg-white"
              />
              <button
                className="ml-2 p-2 place-self-center rounded bg-cyan-400 text-white"
                type="button"
                onClick={() => remove(unitIndex)}
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
        onClick={() => append({ sub: "" })}
      >
        tambah subspesialis
      </button>
    </div>
  );
};
