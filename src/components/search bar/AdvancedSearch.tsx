"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchOptions from "./SearchOptions";

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
    <search className="flex flex-col w-full border-2 sm:w-3/4 2xl:w-1/2 m-2 p-2 rounded-xl">
      {!toggleCat && <SearchBar />}
      {toggleCat && (
        <form className="flex flex-col p-2 rounded-xl z-1" action="/find">
          <SearchOptions />
          <button type="submit">submit</button>
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
