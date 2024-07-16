import { useFormDataFaskesContext } from "@/components/forms/Data Faskes/formDataFaskesSchema";
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
    <div>
      <label>Spesialis</label>
      <ul>
        {fields.map((sp, spIndex) => {
          return (
            <li key={sp.id}>
              <input
                {...register(`spesialis.${spIndex}.spesialisasi`)}
                type="text"
                className="rounded border-2"
              />
              <Spesialisasi spIndex={spIndex} />
              <button type="button" onClick={() => remove(spIndex)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <button
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
    <div>
      <label>Subspesialis</label>
      <ul>
        {fields.map((unit, unitIndex) => {
          return (
            <li key={unit.id}>
              <input
                {...register(`spesialis.${spIndex}.sub.${unitIndex}.sub`)}
                type="text"
                className="rounded border-2"
              />
              <button type="button" onClick={() => remove(unitIndex)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={() => append({ sub: "" })}>
        tambah subspesialis
      </button>
    </div>
  );
};
