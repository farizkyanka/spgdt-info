"use client";

import { provinsi } from "@/lib/FormProvinsi";
import { TipeFaskes } from "../forms/Data Faskes/FormIdFaskes";
import { listRuangRawat } from "./AdvancedSearch";
import { useState } from "react";

export default function SearchOptions() {
  const [subsp, setSubsp] = useState("");

  const handleSubsp = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSubsp(e.target.value);
  };

  const [kota, setKota] = useState([
    {
      id: "",
      province_id: "",
      name: "",
    },
  ]);
  const handleKota = async (
    e: React.FormEvent<HTMLOptionElement>,
    passKota: string
  ) => {
    e.preventDefault();
    const nomorKota = passKota;
    const response = await fetch(
      `https://kanglerian.github.io/api-wilayah-indonesia/api/regencies/${nomorKota}.json`
    );
    const data = await response.json();
    setKota(data);
  };

  return (
    <>
      <fieldset className="p-2 flex flex-wrap justify-around">
        <div className="m-2">
          <label htmlFor="provinsi" className="m-2">
            Provinsi
          </label>
          <select
            name="provinsi"
            id="provinsi"
            className="border-2 w-full min-w-56 rounded-lg border-blue-200 mb-2 p-2"
          >
            {provinsi.map((i) => {
              return (
                <option
                  key={i.id}
                  value={i.name}
                  onClick={(e) => handleKota(e, i.id)}
                >
                  {i.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="m-2">
          <label htmlFor="kotakabupaten" className="m-2">
            Kota/Kabupaten
          </label>
          <select
            className="border-2 w-full min-w-56 rounded-lg border-blue-200 mb-2 p-2"
            name="kotakabupaten"
            id="kotakabupaten"
          >
            {kota.map((i, index) => {
              return (
                <option key={index} value={i.name}>
                  {i.name}
                </option>
              );
            })}
          </select>
        </div>
      </fieldset>
      <fieldset className="p-2 flex justify-around">
        <fieldset className="flex flex-col">
          <label htmlFor="kelasFaskes">Kelas Faskes</label>
          <select
            name="kelasFaskes"
            id="kelasFaskes"
            className="border-2 w-full rounded-lg border-blue-200 mb-2 p-2"
          >
            <option value=""></option>
            {TipeFaskes.map((i, index) => {
              return (
                <option key={index} id={i} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="ruangRawat">Ruang Rawat</label>
          <select
            name="ruangRawat"
            id="ruangRawat"
            className="border-2 w-full rounded-lg border-blue-200 mb-2 p-2"
          >
            <option value=""></option>
            {listRuangRawat.map((i, index) => {
              return (
                <option key={index} id={i} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </fieldset>
      </fieldset>

      <fieldset className="flex flex-wrap justify-evenly place-items-center">
        <div>
          <label htmlFor="fasilitasTerapi">Fasilitas Terapi</label>
          <input
            type="text"
            className="border-2 w-full rounded-lg border-blue-200 mb-2 p-2"
            placeholder="Fasilitas Terapi"
            name="fasilitasTerapi"
            id="fasilitasTerapi"
          />
        </div>
        <div>
          <label htmlFor="fasilitasDiagnostik">Fasilitas Diagnostik</label>
          <input
            type="text"
            className="border-2 w-full rounded-lg border-blue-200 mb-2 p-2"
            placeholder="Fasilitas Diagnostik"
            name="fasilitasDiagnostik"
            id="fasilitasDiagnostik"
          />
        </div>
        <div>
          <label htmlFor="fasilitasEmergensi">Fasilitas Kegawatdaruratan</label>
          <input
            type="text"
            className="border-2 w-full rounded-lg border-blue-200 mb-2 p-2"
            placeholder="Fasilitas Emergensi"
            name="fasilitasEmergensi"
            id="fasilitasEmergensi"
          />
        </div>
      </fieldset>
      <fieldset className="flex flex-wrap place-items-center text-justify justify-evenly">
        <div className="flex place-items-center">
          <label htmlFor="spesialis">Spesialis</label>
          <input
            type="text"
            className="ml-2 border-2 w-full rounded-lg border-blue-200 mb-2 p-2"
            placeholder="Spesialis"
            name="spesialis"
            id="spesialis"
            onChange={(e) => {
              handleSubsp(e);
            }}
          />
        </div>
        <div className="flex place-items-center">
          <label htmlFor="subspesialis">SubSpesialis</label>
          <input
            type="text"
            className={`ml-2 border-2 w-full rounded-lg border-blue-200 mb-2 p-2 ${
              subsp.length > 0
                ? ""
                : "disabled:border-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            }`}
            placeholder="Subspesialis"
            name="subspesialis"
            id="subspesialis"
            disabled={subsp.length > 0 ? false : true}
          />
        </div>
      </fieldset>
    </>
  );
}
