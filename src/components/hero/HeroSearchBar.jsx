import { Search } from "lucide-react";
import React, { useState } from "react";

const HeroSearchBar = ({ onAddCity }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim() === "") return;
    onAddCity(value.trim());
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-10.5 overflow-hidden bg-box rounded-[10px] max-w-156.25 w-full"
    >
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search location..."
        className="min-w-0 flex-1 bg-transparent px-7.25 text-[14px] font-medium text-black placeholder:text-placeholder focus:outline-none"
      />
      <button type="submit" className="flex w-11.25 justify-center items-center shrink-0 border-l-2 bg-brand text-black border-black hover:bg-brand-hover cursor-pointer">
        <Search className="text-[20px]" />
      </button>
    </form>
  );
};

export default HeroSearchBar;
