"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type SearchType = { _id: string; namaFaskes: string }[];

export default function SearchBar() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState<SearchType>([]);

  const handleFetch = async () => {
    const response = await fetch(
      `http://localhost:3000/api/search?query=${prompt}`
    );
    if (response.ok) {
      const data = await response.json();
      setData(data);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const string = e.target.value.toString();
    setPrompt(string);
    handleFetch();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    router.push(`/find?query=${prompt}`);
  };

  return (
    <search className="w-full lg:w-1/2 m-2 p-2 rounded">
      <form className="border-2 m-2 rounded shadow" onSubmit={handleSubmit}>
        <input
          className="w-full h-11 p-2"
          type="text"
          placeholder="Cari nama faskes, kelas faskes, atau fasilitas yang diinginkan"
          onChange={(e) => handleChange(e)}
        />
      </form>
      {data.length > 0 && prompt.length > 0 && (
        <ul className="rounded border-2 m-2 p-2 shadow">
          {data.map((i, index) => {
            return (
              <li className="p-1 hover:bg-blue-200 rounded" key={index}>
                {i.namaFaskes}
              </li>
            );
          })}
        </ul>
      )}
    </search>
  );
}
