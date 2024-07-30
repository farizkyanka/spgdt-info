import FasilitasDiagnostik from "./FormFasilitasDiagnostik";
import FasilitasEmergensi from "./FormFasilitasEmergensi";
import FasilitasTerapi from "./FormFasilitasTerapi";
import FormIdFaskes from "./FormIdFaskes";
import Spesialis from "./FormSpesialis";

export default function FormFaskesField() {
  return (
    <>
      <fieldset className="flex flex-row flex-wrap justify-evenly border-2 m-2 rounded-xl">
        <legend>Data Faskes</legend>
        <FormIdFaskes />
      </fieldset>
      <fieldset className="flex flex-col flex-wrap justify-evenly border-2 m-2 p-4 rounded-xl">
        <legend>Fasilitas Faskes</legend>
        <div className="m-2 flex flex-wrap justify-evenly">
          <FasilitasEmergensi />
          <FasilitasTerapi />
        </div>
        <div className="m-2 flex flex-wrap justify-evenly">
          <FasilitasDiagnostik />
          <Spesialis />
        </div>
      </fieldset>
    </>
  );
}
