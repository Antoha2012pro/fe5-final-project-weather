import React from "react";
import { cn } from "../../utils/cn";

const HeaderNav = ({ isMenuOpen, setIsMenuOpen, className = "", isMenu = false }) => {
  return (
    <nav className={cn("", isMenu ? "" : "md:flex hidden", className)}>
      <ul className={cn("flex", isMenu ? "flex-col gap-6.25" : "flex-row gap-11.25 site-xl:gap-12.25")}>
        <li>
          <a href="#" className="font-alternates font-medium text-[10px]" onClick={() => isMenu && setIsMenuOpen(false)}>Who we are</a>
        </li>
        <li>
          <a href="#" className="font-alternates font-medium text-[10px]" onClick={() => isMenu && setIsMenuOpen(false)}>Contacts</a>
        </li>
        <li>
          <a href="#" className="font-alternates font-medium text-[10px]" onClick={() => isMenu && setIsMenuOpen(false)}>Menu</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
