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
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="relative z-10 py-3.5 md:py-3.75">
        <Container className="flex items-center justify-between">
          <Logo className='w-10 md:w-13.5 site-xl:w-20.5' />

          <HeaderNav className="hidden md:flex" />
          <HeaderSign className="hidden md:flex" />
          <HeaderMenuButton onClick={toggleMenu} isMenuOpen={isMenuOpen} />
        </Container>
      </header>

      <HeaderMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Header;
