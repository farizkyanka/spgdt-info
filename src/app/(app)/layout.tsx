import Link from "next/link";
import { validateRequest } from "@/lib/auth";
import Logout from "@/app/(app)/admin/logout/page";
import dbConnect from "@/lib/dbConnect";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConnect();
  const { user } = await validateRequest();
  return (
    <main>
      <nav className="absolute justify-center flex w-screen p-4 ">
        <nav className="rounded-xl w-screen h-14 max-w-screen-xl flex justify-center items-center">
          <Link
            className={`h-full rounded-lg p-2 m-2 hover:bg-orange-400 flex items-center ${
              !user && "invisible"
            }`}
            href={"/admin/new-item"}
            passHref={true}
          >
            <span>New Item</span>
          </Link>
          <Link
            className="h-full rounded-lg p-2 m-2 hover:bg-orange-400 flex items-center"
            href={"/"}
            passHref={true}
          >
            <span>Home</span>
          </Link>
          <Logout />
        </nav>
      </nav>
      {children}
    </main>
  );
}
