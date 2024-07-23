"use client";
import { revalidatePath } from "next/cache";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3000/api/faskes/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      revalidatePath("/find");
      revalidatePath(`/content/${id}`);
      router.push("/");
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
}
