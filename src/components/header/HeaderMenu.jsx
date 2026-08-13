import React from "react";
import HeaderNav from "./HeaderNav";
import Container from "../ui/Container";
import HeaderSign from "./HeaderSign";
import { cn } from "../../utils/cn";

const HeaderMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={cn(
        "grid bg-linear-to-b from-[#c5c5c5] to-[#E6E6E6]",
        "transition-[grid-template-rows,opacity] duration-300 ease-out",
        isMenuOpen
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="overflow-hidden">
        <Container className="flex items-center justify-between py-7.5">
          <HeaderNav
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isMenu={true}
          />

          <HeaderSign isMenu={true} />
        </Container>
      </div>
    </div>
  );
};

export default HeaderMenu;
