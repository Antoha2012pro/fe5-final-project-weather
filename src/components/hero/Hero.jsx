import React from "react";
import Container from "../ui/Container";
import { getHeroDate } from "../../utils/dateTime";
import HeroSearchBar from "./HeroSearchBar";

const Hero = () => {
    const {day, weekday, monthYear} = getHeroDate();

  return (
    <section
      className="py-25 relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero.webp')" }}
    >
      <div className="absolute inset-0 bg-black/48" />
      <Container className="relative flex flex-col items-center gap-20 min-h-130 z-20">
        <h2 className="text-[40px] font-semibold text-white text-center">Weather dashboard</h2>
        <div className="flex flex-col md:flex-row gap-13 text-white">
            <p className="w-full max-w-86.25 text-right">Create your personal list of favorite cities and always be aware of the weather.</p>
            <div className="h-36 w-0.75 bg-white" />
            <p className="">
                {monthYear}
                <br />
                {weekday}, {day}
            </p>
        </div>
        <HeroSearchBar onAddCity={() => {}} />
      </Container>
    </section>
  );
};

export default Hero;
