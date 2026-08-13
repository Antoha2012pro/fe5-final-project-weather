import React from "react";
import Container from "../ui/Container";
import { getHeroDate } from "../../utils/dateTime";
import HeroSearchBar from "./HeroSearchBar";

const Hero = () => {
  const { day, weekday, monthYear } = getHeroDate();

  return (
    <section
      className="py-25 relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero.webp')" }}
    >
      <div className="absolute inset-0 bg-black/48" />
      <Container className="relative flex flex-col items-center gap-20 z-20">
        <h2 className="text-[40px] font-semibold text-white text-center">
          Weather dashboard
        </h2>
        <div
          className="
    grid w-full max-w-[430px]
    grid-cols-[2px_1fr]
    grid-rows-[auto_auto]
    gap-x-10 gap-y-8
    text-white

    md:grid-cols-[1fr_2px_1fr]
    md:grid-rows-1
    md:items-center
    md:gap-6
  "
        >
          <div
            className="
      col-start-1 row-start-1 row-span-2
      h-full w-[2px] bg-white

      md:col-start-2
      md:row-start-1 md:row-span-1
      md:h-[72px]
    "
          />

          <p
            className="
      col-start-2 row-start-1
      text-left

      md:col-start-1
      md:row-start-1
      md:text-right
    "
          >
            Create your personal list of favorite cities and always be aware of
            the weather.
          </p>

          <p
            className="
      col-start-2 row-start-2

      md:col-start-3
      md:row-start-1
    "
          >
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
