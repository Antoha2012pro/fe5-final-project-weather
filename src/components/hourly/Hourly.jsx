import React from "react";
import HourlyTable from "./HourlyTable";
import Container from "../ui/Container";
import { useCities } from "../../shared/contexts/citiesContext";

const Hourly = () => {
  const { cities, weatherDetails } = useCities();

  const city = cities.find((city) => city.id === weatherDetails.cityId);

  console.log("Hourly debug:", {
    cityId: weatherDetails.cityId,
    city,
    hourlyData: city?.forecast?.hourly,
  });

  return (
    <section>
      <Container className="">
        <HourlyTable
          hourlyData={city?.forecast?.hourly}
          timezone={city?.timezone}
        />
      </Container>
    </section>
  );
};

export default Hourly;