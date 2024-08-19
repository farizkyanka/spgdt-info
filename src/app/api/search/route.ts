import dbConnect from "@/lib/dbConnect";
import Faskes from "@/lib/schema/Faskes";

export async function GET(req: Request) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "";
  let provinsi = searchParams.get("provinsi") || "";
  let kotakabupaten = searchParams.get("kotakabupaten") || "";
  let spesialis = searchParams.get("spesialis") || "";
  let subspesialis = searchParams.get("subspesialis") || "";
  let kelasFaskes = searchParams.get("kelasFaskes") || "";
  let fasilitasEmergensi = searchParams.get("fasilitasEmergensi") || "";
  let fasilitasDiagnostik = searchParams.get("fasilitasDiagnostik") || "";
  let fasilitasTerapi = searchParams.get("fasilitasTerapi") || "";
  let ruangRawat = searchParams.get("ruangRawat") || "";
  const faskes = await Faskes.find({
    namaFaskes: { $regex: query, $options: "i" },
    "alamat.provinsi": { $regex: provinsi, $options: "i" },
    "alamat.kotakabupaten": { $regex: kotakabupaten, $options: "i" },
    spesialis: {
      $elemMatch: {
        spesialisasi: { $regex: spesialis, $options: "i" },
        // sub: { $elemMatch: { sub: { $regex: subspesialis, $options: "i" } } },
      },
    },
    kelasFaskes: { $regex: kelasFaskes, $options: "i" },
    fasilitasEmergensi: {
      $elemMatch: { unit: { $regex: fasilitasEmergensi, $options: "i" } },
    },
    fasilitasTerapi: {
      $elemMatch: { unit: { $regex: fasilitasTerapi, $options: "i" } },
    },
    fasilitasDiagnostik: {
      $elemMatch: {
        unit: {
          $elemMatch: { unit: { $regex: fasilitasDiagnostik, $options: "i" } },
        },
      },
    },
    ruangRawat: {
      $elemMatch: { ruang: { $regex: ruangRawat, $options: "i" } },
    },
  }).limit(20);

  return Response.json(faskes);
}
