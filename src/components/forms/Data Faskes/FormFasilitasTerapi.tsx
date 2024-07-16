import { useFormDataFaskesContext } from "@/components/forms/Data Faskes/formDataFaskesSchema";
import { useFieldArray } from "react-hook-form";

export default function FasilitasTerapi() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormDataFaskesContext();

  const { append, remove, fields } = useFieldArray({
    name: "fasilitas terapi",
    control,
  });

  return (
    <div>
      <label>Fasilitas Terapi</label>
      <ul>
        {fields.map((ter, terIndex) => {
          return (
            <li key={ter.id}>
              <input
                {...register(`fasilitas terapi.${terIndex}.unit`)}
                type="text"
                className="rounded border-2"
              />
              <button type="button" onClick={() => remove(terIndex)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={() => append({ unit: "" })}>
        tambah fasilitas terapi
      </button>
    </div>
  );
}
