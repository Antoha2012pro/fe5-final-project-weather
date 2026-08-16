import React, { useState } from "react";
import DaysItem from "./DaysItem";
import { useCities } from "../../utils/contexts/citiesContext";

const DaysItems = () => {
  const { cities, setCities, weatherDetails, setWeatherDetails } = useCities();

  const handleLike = (id) => {
    setCities((prevCities) =>
      prevCities.map((city) =>
        city.id === id ? { ...city, isLiked: !city.isLiked } : city,
      ),
    );
  };

  //   const addCity = (city) => {
  //     setCities(prevCities => ([...prevCities, {
  //         id: "asdasdasdasd",
  //         city: city
  //     }]))
  //   }

  const handleCurrentVisible = (id) => {
    setWeatherDetails({
      type: "current",
      cityId: id,
    });
  };

  const handleHourlyVisible = () => {};

  const handleEightDaysVisible = () => {};

  return (
    <ul
      className="
      flex flex-row justify-between"
    >
      {cities.map((city, index) => {
        return (
          <DaysItem
            key={city.id || index}
            city={city}
            onLike={handleLike}
            className={`
            w-full
            ${index === 1 ? "hidden site-md:block" : ""} 
            ${index === 2 ? "hidden site-xl:block" : ""}
          `}
            onVisibleCurrent={handleCurrentVisible}
            onVisibleHourly={handleHourlyVisible}
            onVisibleEightDays={handleEightDaysVisible}
          />
        );
      })}
    </ul>
  );
};

export default DaysItems;
