import { ChevronDown } from "lucide-react";
import React from "react";
import { cn } from "../../shared/utils/cn";

const HeaderMenuButton = ({ onClick, isMenuOpen }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center site-md:hidden"
    >
      <span className="font-alternates text-[10px] font-medium">
        Menu
      </span>

      <ChevronDown
        size={15}
        className={cn(
          "transition-transform duration-300",
          isMenuOpen && "rotate-270",
        )}
      />
    </button>
  );
};

export default HeaderMenuButton;