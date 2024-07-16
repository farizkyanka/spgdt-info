import dbConnect from "@/utils/dbConnect";
import Faskes from "@/utils/schema/Faskes";

export async function GET() {
  await dbConnect();

  const faskes = await Faskes.find({});

  return Response.json({ faskes });
}
