import { useFormDataFaskesContext } from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import { useFieldArray } from "react-hook-form";

export default function FasilitasDiagnostik() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormDataFaskesContext();

  const { append, remove, fields } = useFieldArray({
    name: "fasilitasDiagnostik",
    control,
  });

  return (
    <div className="mb-10 min-w-60 flex flex-col">
      <label>Fasilitas Diagnostik</label>
      <ul>
        {fields.map((diag, diagIndex) => {
          return (
            <li className="m-2 p-2 border-b-2" key={diag.id}>
              <input
                {...register(`fasilitasDiagnostik.${diagIndex}.spesialisasi`)}
                type="text"
                className="rounded-lg min-w-full mb-2 p-2 border-2 border-blue-200 bg-white"
              />
              <UnitFasilitasDiagnostik diagIndex={diagIndex} />
              <button
                className="ml-2 p-2 place-self-center rounded bg-cyan-400 text-white"
                type="button"
                onClick={() => remove(diagIndex)}
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
        onClick={() => append({ spesialisasi: "", unit: [] })}
      >
        tambah fasilitas diagnostik
      </button>
    </div>
  );
}

const UnitFasilitasDiagnostik = ({ diagIndex }: { diagIndex: number }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormDataFaskesContext();

  const { append, remove, fields } = useFieldArray({
    name: `fasilitasDiagnostik.${diagIndex}.unit`,
    control,
  });

  return (
    <div className="m-2 p-2 border-2 rounded-xl">
      <label>Unit Diagnostik</label>
      <ul>
        {fields.map((unit, unitIndex) => {
          return (
            <li key={unit.id} className="flex">
              <input
                {...register(
                  `fasilitasDiagnostik.${diagIndex}.unit.${unitIndex}.unit`
                )}
                type="text"
                className="rounded-lg mb-2 p-2 border-2 border-blue-200 bg-white flex-shrink"
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
        onClick={() => append({ unit: "" })}
      >
        tambah unit diagnostik
      </button>
    </div>
  );
};
