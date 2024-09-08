"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchOptions from "./SearchOptions";
import SubmitButton from "../elements/SubmitButton";
import bg from "../../../public/vecteezy_abstract-wallpaper-of-straight-blue-and-purple-lines-in-the_17283298.svg";
import Image from "next/image";

export const listRuangRawat = [
  "PICU",
  "NICU",
  "ICU",
  "HCU",
  "Isolasi",
  "Rawat Anak",
  "Rawat Dewasa",
];

export default function AdvancedSearch() {
  const [toggleCat, setToggleCat] = useState(false);

  return (
    <search
      className="flex flex-col w-full border-2 sm:w-3/4 2xl:w-1/2 m-2 p-2 rounded-xl bg-white"
      // style={{
      //   backgroundImage: "url(/background-lines.svg)",
      //   backgroundSize: "cover",
      //   backgroundAttachment: "fixed",
      // }}
    >
      <div className="absolute -mt-24 -ml-4 font-semibold text-7xl hidden md:inline">
        Cari Faskes
      </div>
      {!toggleCat && <SearchBar />}
      {toggleCat && (
        <form className="flex flex-col p-2 rounded-xl z-1" action="/find">
          <SearchOptions />
          <SubmitButton>Search</SubmitButton>
        </form>
      )}
      <p
        className="text-gray-400 text-sm hover:underline"
        onClick={() => setToggleCat(!toggleCat)}
      >
        {toggleCat ? "gunakan teks pencarian" : "gunakan pilihan pencarian"}
      </p>
    </search>
  );
}
