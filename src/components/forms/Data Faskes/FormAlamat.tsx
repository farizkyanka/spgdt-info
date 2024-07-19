import { useFormDataFaskesContext } from "@/components/forms/Data Faskes/formDataFaskesSchema";
import { provinsi } from "@/lib/FormProvinsi";
import { useState } from "react";

export default function FormAlamat() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormDataFaskesContext();

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

  const [kecamatan, setKecamatan] = useState([
    {
      id: "",
      regency_id: "",
      name: "",
    },
  ]);

  const handleKecamatan = async (
    e: React.FormEvent<HTMLOptionElement>,
    passKecamatan: string
  ) => {
    e.preventDefault();
    const nomorKecamatan = passKecamatan;
    const response = await fetch(
      `https://kanglerian.github.io/api-wilayah-indonesia/api/districts/${nomorKecamatan}.json`
    );
    const data = await response.json();
    setKecamatan(data);
  };
  const [kelurahan, setKelurahan] = useState([
    {
      id: "",
      district_id: "",
      name: "",
    },
  ]);

  const handleKelurahan = async (
    e: React.FormEvent<HTMLOptionElement>,
    passKelurahan: string
  ) => {
    e.preventDefault();
    const nomorKelurahan = passKelurahan;
    const response = await fetch(
      `https://kanglerian.github.io/api-wilayah-indonesia/api/villages/${nomorKelurahan}.json`
    );
    const data = await response.json();
    setKelurahan(data);
  };

  return (
    <>
      <label htmlFor="alamat">Alamat Faskes</label>
      <select {...register("alamat.provinsi")} className="m-2 p-1 rounded-md">
        {provinsi.map((i, index) => {
          return (
            <option
              key={index}
              value={i.name}
              onClick={(e) => handleKota(e, i.id)}
            >
              {i.name}
            </option>
          );
        })}
      </select>
      <select
        {...register("alamat.kotakabupaten")}
        className="m-2 p-1 rounded-md"
      >
        {kota.map((i, index) => {
          return (
            <option
              key={index}
              value={i.name}
              onClick={(e) => {
                handleKecamatan(e, i.id);
              }}
            >
              {i.name}
            </option>
          );
        })}
      </select>
      <select {...register("alamat.kecamatan")} className="m-2 p-1 rounded-md">
        {kecamatan.map((i, index) => {
          return (
            <option
              key={index}
              value={i.name}
              onClick={(e) => {
                handleKelurahan(e, i.id);
              }}
            >
              {i.name}
            </option>
          );
        })}
      </select>
      <select {...register("alamat.kelurahan")} className="m-2 p-1 rounded-md">
        {kelurahan.map((i, index) => {
          return (
            <option key={index} value={i.name}>
              {i.name}
            </option>
          );
        })}
      </select>
      <input
        className="m-2 p-1 rounded-md"
        {...register("alamat.jalan")}
        placeholder="Jalan"
      />
    </>
  );
}
