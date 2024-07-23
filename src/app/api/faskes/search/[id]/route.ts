import dbConnect from "@/lib/dbConnect";
import Faskes from "@/lib/schema/Faskes";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const faskes = await Faskes.find({
    "nama faskes": { $regex: params.id, $options: "i" },
  });
  console.log(params.id);
  return Response.json(faskes);
}
