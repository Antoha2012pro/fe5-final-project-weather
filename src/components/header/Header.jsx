import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import HeaderMenuButton from "./HeaderMenuButton";
import HeaderMenu from "./HeaderMenu";
import HeaderNav from "./HeaderNav";
import HeaderSign from "./HeaderSign";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleResize = () => {
    if (window.innerWidth >= 674) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="relative z-10 py-3.5 site-md:py-3.75">
        <Container className="flex items-center justify-between">
          <Logo className="w-10 site-md:w-13.5 site-xl:w-20.5" />

          <HeaderNav
            className="hidden site-md:flex site-md:ml-14.25 site-xl:ml-27.75"
            setIsMenuOpen={setIsMenuOpen}
          />
          <HeaderSign className="hidden site-md:flex ml-auto" />
          <HeaderMenuButton onClick={toggleMenu} isMenuOpen={isMenuOpen} />
        </Container>
      </header>

      <HeaderMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Header;
