import React from "react";
import NavBarPages from "../components/NavBarPages";
import Section from "../components/Section";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Title from "../components/Title";
import AnimateOnScroll from "../components/AnimateOnScroll";
function Portfolio() {
  return (
    <>
      <NavBarPages />
      <div className="flex h-[160px] items-end lg:h-[250px]">
        <AnimateOnScroll>
          <Section>
            <Title>Portfolio</Title>
          </Section>
        </AnimateOnScroll>
      </div>
      <Section>
        <Projects />
      </Section>
      <Footer />
    </>
  );
}

export default Portfolio;
