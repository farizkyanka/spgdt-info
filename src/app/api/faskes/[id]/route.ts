import dbConnect from "@/lib/dbConnect";
import Faskes from "@/lib/schema/Faskes";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const faskes = await Faskes.findById(params.id);
  return Response.json(faskes);
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const body = await req.json();
  const faskes = await Faskes.findByIdAndUpdate(params.id, body);
  return Response.json(faskes);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const faskes = await Faskes.findByIdAndDelete(params.id);
  return Response.json(faskes);
}
