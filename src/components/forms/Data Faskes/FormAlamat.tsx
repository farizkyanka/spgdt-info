import { useFormDataFaskesContext } from "@/components/forms/Data Faskes/FormDataFaskesSchema";
import { provinsi } from "@/lib/FormProvinsi";
import { useState } from "react";

export default function FormAlamat() {
  const {
    register,
    setValue,
    formState: { errors },
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
    try {
      const response = await fetch(
        `https://kanglerian.github.io/api-wilayah-indonesia/api/regencies/${nomorKota}.json`
      );
      const data = await response.json();
      setKota(data);
    } catch (e) {
      throw new Error("error connecting to server");
    }
  };

  const [kecamatan, setKecamatan] = useState([
    {
      id: "",
      regency_id: "",
      name: "",
    },
  ]);

  const handleKecamatan = async (passKecamatan: string) => {
    const nomorKecamatan = passKecamatan;
    const response = await fetch(
      `https://kanglerian.github.io/api-wilayah-indonesia/api/districts/${nomorKecamatan}.json`
    );
    const data = await response.json();
    setKecamatan(data);
    setKota([
      {
        id: "",
        province_id: "",
        name: "",
      },
    ]);
  };
  const [kelurahan, setKelurahan] = useState([
    {
      id: "",
      district_id: "",
      name: "",
    },
  ]);

  const handleKelurahan = async (passKelurahan: string) => {
    const nomorKelurahan = passKelurahan;
    const response = await fetch(
      `https://kanglerian.github.io/api-wilayah-indonesia/api/villages/${nomorKelurahan}.json`
    );
    const data = await response.json();
    setKelurahan(data);
    setKecamatan([
      {
        id: "",
        regency_id: "",
        name: "",
      },
    ]);
  };

  return (
    <>
      <label htmlFor="alamat">Alamat Faskes</label>
      <select
        {...register("alamat.provinsi")}
        className="rounded-lg w-full mb-2 p-2 border-2 border-blue-200 bg-white"
      >
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
      {errors.alamat?.provinsi && (
        <h6 className="text-red-500">{errors.alamat.provinsi.message}</h6>
      )}
      {/* <select
        {...register("alamat.kotakabupaten")}
        className="rounded-lg w-full mb-2 p-2 border-2 border-blue-200 bg-white"
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
      </select> */}
      <div className="flex flex-col">
        <input
          type="text"
          {...register("alamat.kotakabupaten")}
          className="rounded-lg w-full mb-2 p-2 border-2 border-blue-200 bg-white"
        />
        <div className="w-full">
          {kota.length > 1 && (
            <div className="absolute max-h-60 overflow-auto px-2 border-2 rounded-md bg-white border-blue-200">
              {kota.map((i, index) => {
                return (
                  <p
                    key={index}
                    onClick={(e) => {
                      setValue("alamat.kotakabupaten", i.name);
                      handleKecamatan(i.id);
                    }}
                    className="hover:bg-blue-100 hover:cursor-pointer"
                  >
                    {i.name}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {errors.alamat?.kotakabupaten && (
        <h6 className="text-red-500">{errors.alamat.kotakabupaten.message}</h6>
      )}
      {/* <select
        {...register("alamat.kecamatan")}
        className="rounded-lg w-full mb-2 p-2 border-2 border-blue-200 bg-white"
      >
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
      </select> */}
      <div className="flex flex-col">
        <input
          type="text"
          {...register("alamat.kecamatan")}
          className="rounded-lg w-full mb-2 p-2 border-2 border-blue-200 bg-white"
        />
        <div>
          {kecamatan.length > 1 && (
            <div className="absolute max-h-60 overflow-auto px-2 border-2 rounded-md bg-white border-blue-200">
              {kecamatan.map((i, index) => {
                return (
                  <p
                    key={index}
                    onClick={(e) => {
                      setValue("alamat.kecamatan", i.name);
                      handleKelurahan(i.id);
                    }}
                    className="hover:bg-blue-100 hover:cursor-pointer"
                  >
                    {i.name}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {errors.alamat?.kecamatan && (
        <h6 className="text-red-500">{errors.alamat.kecamatan.message}</h6>
      )}
      {/* <select
        {...register("alamat.kelurahan")}
        className="rounded-lg w-full mb-2 p-2 border-2 border-blue-200 bg-white"
      >
        {kelurahan.map((i, index) => {
          return (
            <option key={index} value={i.name}>
              {i.name}
            </option>
          );
        })}
      </select> */}
      <div className="flex flex-col">
        <input
          type="text"
          {...register("alamat.kelurahan")}
          className="rounded-lg w-full mb-2 p-2 border-2 border-blue-200 bg-white"
        />
        <div>
          {kelurahan.length > 1 && (
            <div className="absolute max-h-60 overflow-auto px-2 border-2 rounded-md bg-white border-blue-200">
              {kelurahan.map((i, index) => {
                return (
                  <p
                    key={index}
                    onClick={(e) => {
                      setValue("alamat.kelurahan", i.name);
                      setKelurahan([]);
                    }}
                    className="hover:bg-blue-100 hover:cursor-pointer"
                  >
                    {i.name}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {errors.alamat?.kelurahan && (
        <h6 className="text-red-500">{errors.alamat.kelurahan.message}</h6>
      )}
      <input
        className="rounded-lg w-full mb-2 p-2 border-2 border-blue-200"
        {...register("alamat.jalan")}
        placeholder="Ketikkan jalan"
      />
      {errors.alamat?.jalan && (
        <h6 className="text-red-500">{errors.alamat.jalan.message}</h6>
      )}
    </>
  );
}
