import React from "react";
import NavBarPages from "../components/NavBarPages";
import Section from "../components/Section";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Title from "../components/Title";

function Portfolio() {
  return (
    <>
      <NavBarPages />
      <div className="flex h-[160px] items-end lg:h-[250px]">
        <Section>
          <Title>Portfolio</Title>
        </Section>
      </div>
      <Section>
        <Projects />
      </Section>
      <Footer />
    </>
  );
}

export default Portfolio;
