import React from "react";
import Container from "../ui/Container";
import { getHeroDate } from "../../shared/utils/dateTime";
import HeroSearchBar from "./HeroSearchBar";
import { useCities } from "../../shared/contexts/citiesContext";

const Hero = () => {
  const { day, weekday, monthYear } = getHeroDate();
  const { cities, setCities, maxCities } = useCities();

  const handleAddCity = (newCity) => {
    setCities((prevCities) => {
      const isDuplicate = prevCities.some(
        (city) => city.lat === newCity.lat && city.lon === newCity.lon,
      );

      if (isDuplicate) {
        alert("This city has already been added.");
        return prevCities;
      }

      if (prevCities.length >= maxCities) {
        alert("Можно добавить максимум 6 городов");
        return prevCities;
      }

      return [...prevCities, newCity];
    });
  };

  console.log(cities);

  return (
    <section
      className="pt-12.5 pb-25 site-md:pt-10 site-md:pb-10 site-xl:pt-20 site-xl:pb-20 relative w-full bg-cover bg-position-[center_67%]"
      style={{ backgroundImage: "url('/assets/hero.webp')" }}
    >
      <div className="absolute inset-0 bg-black/48" />
      <Container className="relative flex flex-col items-center z-20">
        <h2 className="text-[14px] font-semibold text-white text-center site-md:text-[30px] site-xl:text-[40px]">
          Weather dashboard
        </h2>
        <div
          className="grid w-full site-xl:max-w-[800px] max-w-[610px] grid-cols-[2px_1fr] grid-rows-[auto_auto] gap-x-6.25 gap-y-5 text-white text-[10px] mt-[35px] mb-[48px] site-md:grid-cols-[1fr_2px_1fr] site-md:grid-rows-1 site-md:items-start site-md:gap-13 site-md:mt-[40px] site-md:mb-[64px] site-md:text-[14px] site-xl:mt-[80px] site-xl:mb-[80px] site-xl:text-[24px]"
        >
          <div
            className="col-start-1 row-start-1 row-span-2 h-full w-[2px] bg-white site-md:col-start-2 site-md:row-start-1 site-md:row-span-1 site-md:h-[110px] site-md:w-[3px] site-xl:h-[144px]"
          />

          <p
            className="col-start-2 row-start-1 text-left site-md:col-start-1 site-md:row-start-1 site-md:text-right"
          >
            Create your personal list of favorite cities and always be aware of
            the weather.
          </p>

          <p
            className="col-start-2 row-start-2 site-md:col-start-3 site-md:row-start-1"
          >
            {monthYear}
            <br />
            {weekday}, {day}
          </p>
        </div>
        <HeroSearchBar onAddCity={handleAddCity} />
      </Container>
    </section>
  );
};

export default Hero;
