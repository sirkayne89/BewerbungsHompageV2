import React from "react";
import Hero from "./../components/startseite/hero";
import Hauptbereich from "./../components/startseite/hauptbereich";
import Kentnisse from "./../components/startseite/kenntnisse";
import Lebenslauf from "./../components/startseite/lebenslauf";
import Unterlagen from "./../components/startseite/unterlagen";

const bewerbung = () => {
  return (
    <>
      <Hero />
      <div className="hauptbereich">
        <Hauptbereich />
        <Kentnisse />
        <Lebenslauf />
        <Unterlagen />
      </div>
    </>
  );
};

export default bewerbung;
