"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaSearch, SearchType } from "./SearchBarSchema";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

const data = ["test", "tested"];

export default function SearchBar() {
  const router = useRouter();
  const [data, setData] = useState([]);

  return (
    <search className="w-full lg:w-1/2 rounded">
      <form className="w-full border-2 rounded">
        <input
          className="w-full h-11 p-2"
          type="text"
          placeholder="Cari nama faskes, kelas faskes, atau fasilitas yang diinginkan"
        />
      </form>
      <ul className="rounded border-2">
        {data.map((i, index) => {
          return (
            <li className="p-1 hover:bg-blue-200" key={index}>
              {i["nama faskes"]}
            </li>
          );
        })}
      </ul>
    </search>
  );
}
