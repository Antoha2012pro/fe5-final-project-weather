import React, { useState } from "react";
import DaysItem from "./DaysItem";

const DaysItems = ({ cities, setCities }) => {
  const [isHourlyVisible, setIsHourlyVisible] = useState(false);
  const [isWeeklyVisible, setIsWeeklyVisible] = useState(false);

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

  const handleHourly = () => {};

  const handleWeekly = () => {};

  console.log(cities);

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
          />
        );
      })}
    </ul>
  );
};

export default DaysItems;
