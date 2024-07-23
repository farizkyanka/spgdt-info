import dbConnect from "@/lib/dbConnect";
import Faskes from "@/lib/schema/Faskes";

export async function GET(req: Request) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const faskes = await Faskes.find({
    namaFaskes: { $regex: query, $options: "i" },
  }).select("namaFaskes");

  return Response.json(faskes);
}
