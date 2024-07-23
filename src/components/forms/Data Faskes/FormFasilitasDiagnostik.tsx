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
    <div className="flex flex-col justify-center">
      <label>Fasilitas Diagnostik</label>
      <ul>
        {fields.map((diag, diagIndex) => {
          return (
            <li className="m-2 rounded-xl border-2" key={diag.id}>
              <input
                {...register(`fasilitasDiagnostik.${diagIndex}.spesialisasi`)}
                type="text"
                className="rounded border-2"
              />
              <UnitFasilitasDiagnostik diagIndex={diagIndex} />
              <button type="button" onClick={() => remove(diagIndex)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <button
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
    <div className="m-2 border-2 rounded-xl">
      <label>Unit Diagnostik</label>
      <ul>
        {fields.map((unit, unitIndex) => {
          return (
            <li key={unit.id}>
              <input
                {...register(
                  `fasilitasDiagnostik.${diagIndex}.unit.${unitIndex}.unit`
                )}
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
      <button type="button" onClick={() => append({ unit: "" })}>
        tambah unit diagnostik
      </button>
    </div>
  );
};
