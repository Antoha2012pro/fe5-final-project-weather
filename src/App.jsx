import React from "react";
import Container from "./components/ui/Container";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default App;