import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { validateRequest } from "@/lib/auth";
import Logout from "./admin/logout/page";
import dbConnect from "@/lib/dbConnect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPGDT info",
  description: "Situs direktori info Faskes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConnect();
  const { user } = await validateRequest();

  return (
    <html lang="en" className="bg-yellow-50">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
