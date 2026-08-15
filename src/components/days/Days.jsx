import React, { useState } from "react";
import DaysItems from "./DaysItems";
import Container from "../ui/Container";

const Days = () => {
  const [cities, setCities] = useState([
    {
      id: "1",
      city: "Prague",
      country: "Czech Republic",
      time: "67",
      date: {
        date: "13.10.2023",
        day: "Friday",
      },
      img: "",
      temperature: {
        celsius: "12",
        fahrenheit: "120",
      },
      isLiked: false,
    },
    {
      id: "2",
      city: "Kyiv",
      country: "Ukraine",
      time: "677",
      date: {
        date: "13.10.2023",
        day: "Friday",
      },
      img: "",
      temperature: {
        celsius: "12",
        fahrenheit: "120",
      },
      isLiked: false,
    },
    {
      id: "3",
      city: "Berlin",
      country: "Germany",
      time: "667",
      date: {
        date: "13.10.2023",
        day: "Friday",
      },
      img: "",
      temperature: {
        celsius: "12",
        fahrenheit: "120",
      },
      isLiked: false,
    },
  ]);

  return (
    <section className="py-8.75 site-md:py-12.5 site-xl:pt-15 site-xl:pb-20">
      <Container>
        <DaysItems cities={cities} setCities={setCities} />
      </Container>
    </section>
  );
};

export default Days;
