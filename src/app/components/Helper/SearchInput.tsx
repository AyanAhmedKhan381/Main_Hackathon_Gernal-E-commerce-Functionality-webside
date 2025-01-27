"use client";
import { IoSearch } from "react-icons/io5";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full hidden md:inline-flex flex-1 h-12 text-base relative bg-gradient-to-r from-gray-100 to-white shadow-lg rounded-lg">
      <IoSearch className="absolute mt-4 left-3 text-lightOrange text-xl transition-transform transform hover:scale-110" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Product..."
        className="flex-1 outline-none h-full bg-transparent placeholder:text-lightText border-[1px] border-accent/30 rounded-lg pl-12 pr-28 transition-all duration-300 ease-in-out hover:border-accent/50 focus:ring-2 focus:ring-accent/30"
      />

      {search && (
        <IoMdClose
          onClick={() => setSearch("")}
          className="text-accent/60 hover:text-lightRed hoverEffect absolute right-12 top-4 cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-80"
        />
      )}

    </div>
  );
};

export default SearchInput;
