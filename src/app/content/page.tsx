import { RiVerifiedBadgeFill } from "react-icons/ri";
import { datum } from "./seedData";
import toSentenceCase from "@/utils/sentenceCase";

export default function Page() {
  // type dataType = {
  //     nama_faskes: string,
  //     kelas_faskes: string,
  //     alamat: {
  //       Provinsi: string,
  //       "Kota/Kabupaten": string,
  //       Kecamatan: string,
  //       Kelurahan: string,
  //       Jalan: string,
  //     },
  //     nomor_spgdt: string,
  //     BPJS: boolean,
  //     spesialis: string[]
  //     subspesialis: object[],
  //     ruang_rawat: {
  //       [key:string]: number | string
  //     },
  //     fasilitas_emergensi: string[]
  //     fasilitas_diagnostik: object[],
  //     fasilitas_terapi: string[]
  //   }
  const payload = datum;

  return (
    <main className="max-w-screen m-2 flex justify-center">
      <div className="max-w-screen-xl rounded-xl border-2 border-black-100">
        <section className="m-2 border-slate-400 border-b-2 flex justify-center">
          <div className="p-2 container max-w-screen-xl">
            <h1 className="text-3xl">{payload["nama faskes"]}</h1>
            <h1>{payload["kelas faskes"]}</h1>
            <h1>
              {`${payload.alamat["jalan"]},
            ${payload.alamat["kelurahan"]},
            ${payload.alamat["kecamatan"]} ,
            ${payload.alamat["kotakabupaten"]},
            ${payload.alamat["provinsi"]}`}
            </h1>
            <h1>{payload["nomor spgdt"]}</h1>
            <p>
              BPJS:
              {payload.BPJS ? (
                <RiVerifiedBadgeFill color="green" className="inline" />
              ) : (
                "tidak"
              )}
            </p>
          </div>
        </section>
        <section className="m-2 p-2 border-slate-400 border-b-2 flex justify-center">
          <div className="container max-w-screen-xl grid md:grid-cols-2">
            <div className="mb-4">
              <h1 className="text-3xl">Fasilitas Rawat</h1>
              <ul className="flex flex-col">
                {payload.ruang_rawat.map((item, index) => (
                  <li key={index}>{`${item.ruang}: ${item.jumlah}`}</li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-3xl">Fasilitas Kegawatdaruratan</h1>
              <ul>
                {payload.fasilitas_emergensi.map((item, index) => (
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
                {payload.fasilitas_diagnostik.map((i, index) => (
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
              {payload.fasilitas_terapi.map((i, index) => (
                <li className="m-2 p-2 rounded bg-slate-100" key={index}>
                  {i.unit}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="m-2 p-2 border-slate-400 border-b-2">
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
      </div>
    </main>
  );
}
