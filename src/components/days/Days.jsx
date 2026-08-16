import React, { useEffect } from "react";
import DaysItems from "./DaysItems";
import Container from "../ui/Container";
import { useCities } from "../../utils/contexts/citiesContext";
import { saveCities } from "../../utils/saveCities";

const Days = () => {
  const { cities } = useCities();

  useEffect(() => {
    saveCities(cities);
  }, [cities])

  return (
    <section className="py-8.75 site-md:py-12.5 site-xl:pt-15 site-xl:pb-20">
      <Container>
        <DaysItems />
      </Container>
    </section>
  );
};

export default Days;
