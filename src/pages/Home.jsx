import React from "react";
import NavBar from "../components/NavBar";
import AnimateOnScroll from "../components/AnimateOnScroll.tsx";
import Section from "../components/Section";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Skills from "../components/Skills";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import LatestProjects from "../components/LatestProjects";

function Home() {
  return (
    <>
      
      <NavBar />
      <AnimateOnScroll>
        <Section>
          <Hero />
        </Section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Section>
          <Services />
        </Section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Section>
          <LatestProjects />
        </Section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Section>
          <Skills />
        </Section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <div className="my-32 md:mt-48 md:mb-20">
          <ContactSection />
        </div>
      </AnimateOnScroll>
      <Footer />
    </>
  );
}

export default Home;
