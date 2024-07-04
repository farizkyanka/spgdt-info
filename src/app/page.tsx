import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <h1>
        <Link className="" href={"/content"}>
          content
        </Link>
      </h1>
      <h1>
        <Link className="" href={"/find"}>
          find
        </Link>
      </h1>
      <div className="text-center border-t-2">
        <h1>admin</h1>
        <h1>
          <Link className="" href={"/admin/new-item"}>
            new item
          </Link>
        </h1>
      </div>
    </main>
  );
}
