import AdvancedSearch from "@/components/search bar/AdvancedSearch";
import Link from "next/link";

export default function Home() {
  return (
    <main className="md:w-screen md:h-screen flex flex-col justify-center items-center">
      <AdvancedSearch />
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
