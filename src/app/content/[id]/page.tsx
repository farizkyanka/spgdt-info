import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from "next/link";
import { PayloadType } from "@/lib/schema/Faskes";
import DeleteItem from "@/components/elements/DeleteItem";
import { validateRequest } from "@/lib/auth";
import RegularButton from "@/components/elements/RegularButton";
import dateFormatter from "@/lib/dateFormatter";
import { Suspense } from "react";
import Spinner from "@/components/elements/Spinner";

export default async function Page({ params }: { params: { id: string } }) {
  const { user } = await validateRequest();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/faskes/${params.id}`,
    { next: { revalidate: 0 } }
  );

  if (!response.ok) throw new Error("failed to fetch data");
  const faskes = await response.json();
  const payload: PayloadType = faskes;

  return (
    <main className="max-w-screen pt-20 flex justify-center">
      <Suspense fallback={<Spinner />}>
        <div className="max-w-screen-xl bg-white rounded-xl border-2 border-black-100 shadow-xl mb-8">
          <section className="m-2 border-slate-400 border-b-2 flex justify-center">
            <div className="p-2 container max-w-screen-xl">
              <h1 className="text-3xl">{payload["namaFaskes"]}</h1>
              <h1>{payload["kelasFaskes"]}</h1>
              <h1>
                {`${payload.alamat.jalan},
            ${payload.alamat.kelurahan},
            ${payload.alamat.kecamatan} ,
            ${payload.alamat.kotakabupaten},
            ${payload.alamat.provinsi}`}
              </h1>
              <h1>{payload["nomorSPGDT"]}</h1>
              <p>
                BPJS:
                {payload.BPJS ? (
                  <RiVerifiedBadgeFill color="green" className="inline" />
                ) : (
                  "tidak"
                )}
              </p>
              <h1>
                Situs resmi:{" "}
                <a
                  className="text-cyan-500"
                  target="_blank"
                  href={payload.situsWeb}
                  rel="noopener noreferrer"
                >
                  {payload.situsWeb}
                </a>
              </h1>
            </div>
            {user !== null && (
              <div className="flex">
                <Link
                  className="m-2 p-2 rounded place-self-center text-white"
                  href={`/admin/edit-item/${params.id}`}
                >
                  <RegularButton>Edit</RegularButton>
                </Link>
                <DeleteItem />
              </div>
            )}
          </section>
          <section className="m-2 p-2 border-slate-400 border-b-2 flex justify-center">
            <div className="container max-w-screen-xl grid md:grid-cols-2">
              <div className="mb-4">
                <h1 className="text-3xl">Fasilitas Rawat</h1>
                <ul className="flex flex-col">
                  {payload["ruangRawat"].map((item, index) => (
                    <li key={index}>{`${item.ruang}: ${item.jumlah}`}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-3xl">Fasilitas Kegawatdaruratan</h1>
                <ul>
                  {payload["fasilitasEmergensi"].map((item, index) => (
                    <li key={index}>{item.unit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="m-2 p-2 border-slate-400 border-b-2 flex justify-center">
            <div className="container max-w-screen-xl">
              <h1 className="text-3xl">Fasilitas Diagnostik</h1>
              <div className="w-full flex justify-center">
                <div className="m-2 flex flex-row flex-wrap container max-w-screen-xl">
                  {payload["fasilitasDiagnostik"].map((i, index) => (
                    <div className="m-2 w-60" key={index}>
                      <div className="p-2 bg-slate-400 rounded-t text-white">
                        {i.spesialisasi}
                      </div>
                      <ul className="p-4 rounded-b bg-slate-100">
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
            </div>
          </section>
          <section className="m-2 p-2 border-slate-400 border-b-2">
            <div></div>
            <div>
              <h1 className="text-3xl">Fasilitas Terapi</h1>
              <ul className="flex flex-wrap flex-row">
                {payload["fasilitasTerapi"].map((i, index) => (
                  <li className="m-2 p-2 rounded bg-slate-100" key={index}>
                    {i.unit}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="m-2 p-2 border-slate-400">
            <h1 className="text-3xl">Spesialisasi</h1>
            <div className="flex flex-row flex-wrap">
              {payload.spesialis.map((item, index) => (
                <div className="m-2 w-60" key={index}>
                  <div className="p-2 text-white rounded-t bg-slate-400">
                    {item.spesialisasi}
                  </div>
                  <ul className="p-4 rounded-b bg-slate-100">
                    {item.sub.map((i, index) => (
                      <li className="ml-2" key={index}>
                        {i?.sub}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <h1 className="m-4 text-end italic text-slate-300">
            {`pembaruan terakhir: ${dateFormatter(payload.recentlyUpdated)}`}
          </h1>
        </div>
      </Suspense>
    </main>
  );
}
