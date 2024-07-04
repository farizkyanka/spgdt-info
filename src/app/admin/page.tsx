import Link from "next/link";

export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Link
        href={"admin/new-item"}
        className="w-28 h-20 border-2 border-gray-400 rounded"
      >
        <span>New Item</span>
      </Link>
    </div>
  );
}
