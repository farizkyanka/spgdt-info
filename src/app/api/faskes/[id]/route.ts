import dbConnect from "@/lib/dbConnect";
import Faskes from "@/lib/schema/Faskes";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const id = params.id; // 'a', 'b', or 'c'
  console.log(id);
  const faskes = await Faskes.findById({ id });
  return Response.json(faskes);
}
