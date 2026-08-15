import React from "react";
import Container from "./components/ui/Container";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Days from "./components/days/Days";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Days />
      </main>
    </>
  );
};

export default App;