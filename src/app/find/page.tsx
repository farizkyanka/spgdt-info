"use client";

import SearchOptions from "@/components/search bar/SearchOptions";
import SubmitButton from "@/components/elements/SubmitButton";
import SearchResult from "@/components/elements/SearchResult";

export default function Page() {
  return (
    <main className="flex justify-center flex-wrap items-center flex-col pt-20">
      <section className="bg-white w-full max-w-screen-xl shadow-xl">
        <form className="flex flex-col py-2" action="/find">
          <SearchOptions />
          <SubmitButton>Search</SubmitButton>
        </form>
      </section>
      <SearchResult />
    </main>
  );
}
