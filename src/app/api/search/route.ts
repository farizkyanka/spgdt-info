import dbConnect from "@/lib/dbConnect";
import Faskes from "@/lib/schema/Faskes";

export async function GET(req: Request) {
  await dbConnect();

  const { searchParams } = new URL(req.url);

  function dbQuery(searchParams: URLSearchParams) {
    const namaFaskes = searchParams.get("query")
      ? { namaFaskes: { $regex: searchParams.get("query"), $options: "i" } }
      : null;
    const provinsi = searchParams.get("provinsi")
      ? {
          "alamat.provinsi": {
            $regex: searchParams.get("provinsi"),
            $options: "i",
          },
        }
      : null;
    const kotakabupaten = searchParams.get("kotakabupaten")
      ? {
          "alamat.kotakabupaten": {
            $regex: searchParams.get("kotakabupaten"),
            $options: "i",
          },
        }
      : null;
    const subspesialis = searchParams.get("subspesialis")
      ? {
          sub: {
            $elemMatch: {
              sub: { $regex: searchParams.get("subspesialis"), $options: "i" },
            },
          },
        }
      : null;
    const spesialis = searchParams.get("spesialis")
      ? {
          spesialis: {
            $elemMatch: {
              spesialisasi: {
                $regex: searchParams.get("spesialis"),
                $options: "i",
              },
              ...subspesialis,
            },
          },
        }
      : null;

    const kelasFaskes = searchParams.get("kelasFaskes")
      ? {
          kelasFaskes: {
            $regex: searchParams.get("kelasFaskes"),
            $options: "i",
          },
        }
      : null;
    const fasilitasEmergensi = searchParams.get("fasilitasEmergensi")
      ? {
          fasilitasEmergensi: {
            $elemMatch: {
              unit: {
                $regex: searchParams.get("fasilitasEmergensi"),
                $options: "i",
              },
            },
          },
        }
      : null;
    const fasilitasDiagnostik = searchParams.get("fasilitasDiagnostik")
      ? {
          fasilitasDiagnostik: {
            $elemMatch: {
              unit: {
                $elemMatch: {
                  unit: {
                    $regex: searchParams.get("fasilitasDiagnostik"),
                    $options: "i",
                  },
                },
              },
            },
          },
        }
      : null;
    const fasilitasTerapi = searchParams.get("fasilitasTerapi")
      ? {
          fasilitasTerapi: {
            $elemMatch: {
              unit: {
                $regex: searchParams.get("fasilitasTerapi"),
                $options: "i",
              },
            },
          },
        }
      : null;
    const ruangRawat = searchParams.get("ruangRawat")
      ? {
          ruangRawat: {
            $elemMatch: {
              ruang: { $regex: searchParams.get("ruangRawat"), $options: "i" },
            },
          },
        }
      : null;
    const dbQuery = {
      ...namaFaskes,
      ...provinsi,
      ...kotakabupaten,
      ...spesialis,
      ...kelasFaskes,
      ...fasilitasEmergensi,
      ...fasilitasDiagnostik,
      ...fasilitasTerapi,
      ...ruangRawat,
    };
    return dbQuery;
  }
  const faskes = await Faskes.find(dbQuery(searchParams));
  return Response.json(faskes);
}
