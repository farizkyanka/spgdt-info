import { data } from "../content/seedData";

export default function Page() {
  return (
    <main className="w-screen flex justify-center">
      <div className="container max-w-screen-2xl m-2 p-2 rounded-xl shadow-[0px_16px_16px_0px_#0000004d]">
        {data.map((unit, index) => (
          <div
            key={index}
            className="m-2 rounded-xl border-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6"
          >
            <div className="p-2 max-h-56 flex flex-col overflow-hidden bg-slate-200">
              <h2 className="self-center">{unit["nama faskes"]}</h2>
              <h2>{unit["kelas faskes"]}</h2>
              <h2>{`${unit.alamat.jalan} ${unit.alamat.kotakabupaten}`}</h2>
            </div>
            <div className="p-2 h-56 flex flex-col bg-slate-200">
              <h1 className="self-center mb-2">Rawat</h1>
              <ul className="flex flex-col overflow-auto">
                {unit.ruang_rawat.map((item, index) => (
                  <li className="flex justify-around" key={index}>
                    <span>{item.ruang}</span>
                    <span>{item.jumlah}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2 h-56 flex-grow flex flex-col bg-slate-200">
              <h1 className="self-center">Fasilitas Emergensi</h1>
              <ul className="overflow-auto">
                {unit.fasilitas_emergensi.map((item, index) => (
                  <li key={index}>- {item.unit}</li>
                ))}
              </ul>
            </div>
            <div className="p-2 h-56 flex flex-col bg-slate-200">
              <h2 className="self-center mb-2">Spesialis</h2>
              <ul className="overflow-auto">
                {unit.spesialis.map((item, index) => (
                  <li key={index}>
                    - {item.spesialisasi}
                    <p className="ml-2">
                      <ul>
                        {item.sub.map((i, index) => (
                          <li className="ml-2" key={index}>
                            {`-${i.sub}`}
                          </li>
                        ))}
                      </ul>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2 h-56 flex-grow flex flex-col bg-slate-200">
              <h1 className="self-center mb--2">Fasilitas Diagnostik</h1>
              <div className="overflow-auto">
                {unit.fasilitas_diagnostik.map((i, index) => (
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
            <div className="p-2 h-56 flex-grow flex flex-col bg-slate-200">
              <h1 className="self-center mb-2">Fasilitas Terapi</h1>
              <ul className="overflow-auto">
                {unit.fasilitas_terapi.map((i, index) => (
                  <li key={index}>{i.unit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
