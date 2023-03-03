import React from "react";
import NavBarPages from "../components/NavBarPages";
import Section from "../components/Section";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll.tsx";
import Title from "../components/Title";
import Sk from "../data/skills.json";
import { TechCard } from "../components/Skills";
import Certifications from "../components/Certifications";

export function ParAb(props) {
  return (
    <p className="md:leading-normal xs:text-md sm:text-lg md:text-2xl lg:text-4xl pb-8 xl:pb-16 font-par text-white ">
      {props.children}
    </p>
  );
}

function About() {
  return (
    <>
      <NavBarPages />
      <AnimateOnScroll>
        <div className="md:flex md:h-[250px] md:items-end">
          <Section>
            <Title>About me</Title>
          </Section>
        </div>
        <div className="mt-8 xl:mt-16">
          <Section>
            <ParAb>
              I am <b>Alexis Rodriguez</b>, an Engineer originally from
              Venezuela. I have experience on optimizing processes and resources
              in technological projects, guaranteeing the control of their
              progress through <b>data analysis and decision-making</b> that
              prioritize the quality of the product or service.
            </ParAb>
            <ParAb>
              I have participated in the development of multiple projects where
              data represents a key-factor to make crucial decisions using and
              applying <b>business intelligence.</b>
            </ParAb>

            <ParAb>
              My <b>skills set</b> includes the use of the following
              technologies, programming languages, tools and frameworks:
            </ParAb>
          </Section>
        </div>
        <Section>
          <div className="row">
            <div className="mt-4 xl:mt-8">
              <div className="flex flex-wrap justify-center gap-2 xl:gap-5">
                {Sk.map((t, index) => (
                  <TechCard key={t.id} colorTech={t.color} t={t} />
                ))}
              </div>
            </div>
          </div>
        </Section>
      </AnimateOnScroll>
      <AnimateOnScroll>
        <div className="lg:mt-36">
          <Section>
            <Title>Certifications</Title>
            <div className="lg:mt-16">
              <Certifications />
            </div>
          </Section>
        </div>
      </AnimateOnScroll>
      <Footer />
    </>
  );
}

export default About;
