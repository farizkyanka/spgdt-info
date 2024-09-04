"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { PayloadType } from "@/lib/schema/Faskes";
import SearchOptions from "@/components/search bar/SearchOptions";
import SubmitButton from "@/components/elements/SubmitButton";
import RegularButton from "./RegularButton";

export default function SearchResult() {
  const params = useSearchParams().toString();

  async function fetchData() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/search?${params}`,
      {
        headers: {
          method: "GET",
          "content-type": "application/json",
        },
        next: { revalidate: 0 },
      }
    );
    const data = await response.json();
    return data;
  }

  const { data, error, isLoading } = useSWR<PayloadType[]>(
    "/api/search",
    fetchData
  );

  if (isLoading) return <h5 className="pt-20 text-center">loading...</h5>;
  if (error) return <h6>error</h6>;

  return (
    <section className="max-w-screen-xl m-2 p-2 bg-white shadow-[0px_16px_16px_0px_#0000004d]">
      {data?.map((unit, index) => (
        <div
          key={index}
          className="m-2 rounded-xl border-4 border-orange-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6"
        >
          <div className="p-2 max-h-56 flex flex-col overflow-hidden">
            <Link className="self-center" href={`/content/${unit._id}`}>
              <RegularButton>
                <h2 className="font-bold">{unit["namaFaskes"]}</h2>
              </RegularButton>
            </Link>
            <h2>{unit["kelasFaskes"]}</h2>
            <h2>{`${unit.alamat.jalan} ${unit.alamat.kotakabupaten}`}</h2>
          </div>
          <div className="p-2 h-56 flex flex-col">
            <h1 className="self-center mb-2">Rawat</h1>
            <ul className="flex flex-col overflow-auto">
              {unit["ruangRawat"].map((item, index) => (
                <li className="flex justify-around" key={index}>
                  <span>{item.ruang}</span>
                  <span>{item.jumlah}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-2 h-56 flex-grow flex flex-col">
            <h1 className="self-center">Fasilitas Emergensi</h1>
            <ul className="overflow-auto">
              {unit["fasilitasEmergensi"].map((item, index) => (
                <li key={index}>- {item.unit}</li>
              ))}
            </ul>
          </div>
          <div className="p-2 h-56 flex flex-col">
            <h2 className="self-center mb-2">Spesialis</h2>
            <ul className="overflow-auto">
              {unit.spesialis.map((item, index) => (
                <li key={index}>
                  - {item.spesialisasi}
                  <div className="ml-2">
                    <ul>
                      {item.sub.map((i, index) => (
                        <li className="ml-2" key={index}>
                          {`-${i.sub}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-2 h-56 flex-grow flex flex-col">
            <h1 className="self-center mb--2">Fasilitas Diagnostik</h1>
            <div className="overflow-auto">
              {unit["fasilitasDiagnostik"].map((i, index) => (
                <div key={index}>
                  <div>{i.spesialisasi}</div>
                  <ul>
                    {i.unit.map((o, index) => (
                      <li key={index} className="ml-2">
                        {o.unit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="p-2 h-56 flex-grow flex flex-col">
            <h1 className="self-center mb-2">Fasilitas Terapi</h1>
            <ul className="overflow-auto">
              {unit["fasilitasTerapi"].map((i, index) => (
                <li key={index}>{i.unit}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
