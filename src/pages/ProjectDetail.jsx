import React from "react";
import { useParams } from "react-router-dom";
import Pr from "../data/projects.json";
import NavBarPages from "../components/NavBarPages";
import Section from "../components/Section";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll.tsx";
import { Tech } from "../components/Projects";
import LinkC from "../components/LinkC";

export function PrTitle(props) {
  return (
    <div className="border-b-green border-b-4 max-w-[100%] xl:max-w-[60%]">
      <h1 className="text-2xl md:leading-tight md:text-5xl font-heading text-white pb-2 md:pb-3 ">
        {props.children}
      </h1>
    </div>
  );
}
export function PrCard({ p }) {
  return (
    <div className="min-w-full md:min-w-full mx-auto bg-transparent rounded-sm shadow-lg overflow-hidden md:max-w-sm ">
      <div className="md:flex md:flex-row">
        <div className="min-h-[450px] lg:min-h-[300px] p-8 border-4 rounded-[25px] border-turq flex flex-wrap justify-between">
          <div className="flex flex-wrap gap-2 max-h-[40px]">
            {p.techs.map((t) => (
              <Tech t={t} />
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="block mt-1 text-md md:text-xl leading-tight font-heading text-white">
              {p.date}
            </h1>
            <p className=" text-white font-par  text-md md:text-lg ">
              {p.description}
            </p>
            <div className="flex flex-col gap-3 lg:flex-row  lg:gap-4">
              <LinkC
                to={p.link}
                className="flex justify-center items-center bg-green py-2 px-16 rounded-xl hover:bg-[#cbf259] transition duration-200"
              >
                <h1 className=" text-blue text-xl font-heading">View</h1>
              </LinkC>
              <LinkC
                to={p.readmore}
                className="flex justify-center items-center bg-transparent border-turq border-2 py-2 px-10 rounded-xl hover:border-green transition duration-200"
              >
                <h1 className=" text-green text-xl font-heading">Read more</h1>
              </LinkC>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const thisProject = Pr.find((project) => project.id === parseInt(id));

  return (
    <>
      {window.scrollTo(0, 0)}
      <NavBarPages />
      <div className="flex items-end mt-12 md:mt-36">
        <Section>
          <AnimateOnScroll>
            <PrTitle>{thisProject.title}</PrTitle>
          </AnimateOnScroll>
        </Section>
      </div>
      <div className="row md:col">
        <div className="md:py-2">
          <AnimateOnScroll>
            <PrCard p={thisProject} />
          </AnimateOnScroll>
        </div>
      </div>

      <div className="flex justify-center py-20">
        <img src={`../${thisProject.image}`} width={700}></img>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetail;
