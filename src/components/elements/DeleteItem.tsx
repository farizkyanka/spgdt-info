"use client";
import { revalidatePath } from "next/cache";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:${process.env.PORT!}/api/faskes/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (response.ok) {
      revalidatePath("/find");
      revalidatePath(`/content/${id}`);
      router.push("/");
    }
  };

  return (
    <button
      className="m-2 p-2 rounded bg-orange-400 place-self-center text-white"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}
