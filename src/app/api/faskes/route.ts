import dbConnect from "@/lib/dbConnect";
import Faskes from "@/lib/schema/Faskes";

export async function GET() {
  await dbConnect();
  const faskes = await Faskes.find({});
  return Response.json(faskes);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  console.log(body);
  const faskesData = new Faskes(body);
  const dbResponse = await faskesData.save();
  return Response.json(dbResponse);
}
