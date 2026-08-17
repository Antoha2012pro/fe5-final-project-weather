import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Days from "./components/days/Days";
import { useCities } from "./shared/contexts/citiesContext";
import Current from "./components/current/Current.jsx";

const App = () => {
  const { weatherDetails } = useCities();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Days />
        {weatherDetails.type === "current" && <Current />}
      </main>
    </>
  );
};

export default App;
