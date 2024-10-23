"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchOptions from "./SearchOptions";
import SubmitButton from "../elements/SubmitButton";
import { AnimatePresence, motion } from "framer-motion";

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
    <AnimatePresence>
      <search className="flex flex-col w-full border-2 sm:w-3/4 2xl:w-1/2 m-2 p-2 rounded-xl bg-white">
        <div className="absolute -mt-16 md:-mt-24 -ml-4 font-semibold text-5xl md:text-7xl inline">
          Cari Faskes
        </div>
        {!toggleCat && (
          <motion.div initial={{ height: 200 }} animate={{ height: "auto" }}>
            <SearchBar />
          </motion.div>
        )}
        {toggleCat && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.1 }}
            exit={{ height: "auto", opacity: 0 }}
            className="overflow-hidden"
          >
            <form className="flex flex-col p-2 rounded-xl z-1" action="/find">
              <SearchOptions />
              <SubmitButton>Search</SubmitButton>
            </form>
          </motion.div>
        )}
        <button
          type="button"
          className="mt-2 p-1 rounded flex-shrink h-fit w-fit text-gray-400 text-sm hover:bg-gray-400 hover:text-white"
          onClick={() => setToggleCat(!toggleCat)}
        >
          {toggleCat ? "gunakan teks pencarian" : "gunakan pilihan pencarian"}
        </button>
      </search>
    </AnimatePresence>
  );
}
