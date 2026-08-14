import React from "react";
import Container from "../ui/Container";
import { getHeroDate } from "../../utils/dateTime";
import HeroSearchBar from "./HeroSearchBar";

const Hero = () => {
  const { day, weekday, monthYear } = getHeroDate();

  return (
    <section
      className="pt-12.5 pb-25 md:pt-10 md:pb-10 site-xl:pt-20 site-xl:pb-20 relative w-full bg-cover bg-position-[center_67%]"
      style={{ backgroundImage: "url('/assets/hero.webp')" }}
    >
      <div className="absolute inset-0 bg-black/48" />
      <Container className="relative flex flex-col items-center z-20">
        <h2 className="text-[20px] font-semibold text-white text-center md:text-[30px] site-xl:text-[40px]">
          Weather dashboard
        </h2>
        <div
          className="grid w-full max-w-[600px] grid-cols-[2px_1fr] grid-rows-[auto_auto] gap-x-6.25 gap-y-5 text-white text-[14px] mt-[35px] mb-[48px]
          md:grid-cols-[1fr_2px_1fr]
          md:grid-rows-1
          md:items-start
          md:gap-13
          md:mt-[40px]
          md:mb-[64px]
          site-xl:mt-[80px]
          site-xl:mb-[80px]
          site-xl:text-[16px]"
        >
          <div
            className="col-start-1 row-start-1 row-span-2
            h-full w-[2px] bg-white
            md:col-start-2
            md:row-start-1 md:row-span-1
            md:h-[110px]
            md:w-[3px]
            site-xl:h-[144px]"
          />

          <p
            className="col-start-2 row-start-1
            text-left
            md:col-start-1
            md:row-start-1
            md:text-right"
          >
            Create your personal list of favorite cities and always be aware of
            the weather.
          </p>

          <p
            className="col-start-2 row-start-2
            md:col-start-3
            md:row-start-1"
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
