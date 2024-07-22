import dbConnect from "@/lib/dbConnect";
import Faskes from "@/lib/schema/Faskes";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  console.log(params.id);
  const faskes = await Faskes.findById(params.id);
  return Response.json(faskes);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  return Response.json("message");
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const faskes = await Faskes.findByIdAndDelete(params.id);
  return Response.json(faskes);
}
