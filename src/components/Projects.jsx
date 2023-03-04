import React from "react";
import Pr from "../data/projects.json";
import AnimateOnScroll from "../components/AnimateOnScroll.tsx";
import { Project as ProjectMb } from "../components/LatestProjects";
import LinkC from "../components/LinkC";

export function Tech({ t }) {
  const techs = {
    "MS Excel":
      "inline-flex max-h-20 py-0 px-2 border-[3px] rounded-full border-excel ",
    Python:
      "inline-flex max-h-20 py-0 px-2 border-[3px] rounded-full border-python dark:border-[#E0C22B]",
    Pandas:
      "inline-flex max-h-20 py-0 px-2 border-[3px] rounded-full border-pandas",
    NumPy:
      "inline-flex max-h-20 py-0 px-2 border-[3px] rounded-full border-numpy",
    Seaborn:
      "inline-flex max-h-20 py-0 px-2 border-[3px] rounded-full border-seaborn dark:border-[#487ea5]",
    SQL: "inline-flex max-h-20 py-0 px-2 border-[3px] rounded-full border-sql",
    MySQL:
      "inline-flex max-h-20 py-0 px-2 border-[3px] rounded-full border-mysql",
    "MS SQL Server":
      "inline-flex max-h-20 py-0 px-2 border-[3px] rounded-full border-mssql",
    PostgreSQL:
      "inline-flex max-h-20 py-0 px-2 border-[3px] rounded-full border-postgresql",
    Tableau:
      "inline-flex max-h-20 py-0 px-2 border-[3px] rounded-full border-tableau",
    Looker:
      "inline-flex max-h-20 py-0 px-2 border-[3px] rounded-full border-looker",
    React:
      "inline-flex max-h-20 py-0 px-2 border-[3px] rounded-full border-react",
  };

  const text = {
    "MS Excel": "p-1 text-lg mx-auto font-heading text-excel",
    Python: "p-1 text-lg mx-auto font-heading text-python dark:text-[#E0C22B]",
    Pandas: "p-1 text-lg mx-auto font-heading text-pandas",
    NumPy: "p-1 text-lg mx-auto font-heading text-numpy",
    Seaborn: "p-1 text-lg mx-auto font-heading text-seaborn dark:text-[#487ea5]",
    SQL: "p-1 text-lg mx-auto font-heading text-sql",
    MySQL: "p-1 text-lg mx-auto font-heading text-mysql",
    "MS SQL Server": "p-1 text-lg mx-auto font-heading text-mssql",
    PostgreSQL: "p-1 text-lg mx-auto font-heading text-postgresql",
    Tableau: "p-1 text-lg mx-auto font-heading text-tableau",
    Looker: "p-1 text-lg mx-auto font-heading text-looker",
    React: "p-1 text-lg mx-auto font-heading text-react",
  };

  const techClasses = techs[t];
  const textClasses = text[t];

  return (
    <div className={`${techClasses} `}>
      <h1 className={`${textClasses}`}>{t}</h1>
    </div>
  );
}

export function Project({ p }) {
  return (
    <div className="min-w-full md:min-w-full mx-auto bg-transparent rounded-[40px] shadow-lg overflow-hidden md:max-w-sm hover:bg-[#21385a] dark:hover:bg-lhover transition duration-300">
      <LinkC to={`/portfolio/${p.id}`}>
        <div className="md:flex md:flex-row">
          <div className="shrink-0">
            <img
              className="h-full md:h-[500px] w-full object-cover object-top h-full md:w-48 px-[1px]"
              src={p.image}
              alt="Modern building architecture"
              width={610}
            />
          </div>
          <div className="md:h-[500px] p-8 border-t-4 border-r-4 border-b-4 rounded-[40px] rounded-l-none border-turq flex flex-wrap justify-between dark:border-lborder dark:duration-300 dark:border-2 dark:border-l-transparent">
            <div className="flex flex-wrap gap-2 max-h-[40px]">
              {p.techs.map((t) => (
                <Tech t={t} />
              ))}
            </div>
            <div className="flex flex-col justify-between">
              <LinkC
                to={`/portfolio/${p.id}`}
                className="block mt-1 text-xl md:text-4xl leading-tight font-heading text-white dark:text-blue duration-300"
              >
                {p.title}
              </LinkC>
              <h1 className="block mt-1 text-md md:text-xl leading-tight font-heading text-white dark:text-blue duration-300">
                {p.date}
              </h1>
              <p className="mt-2 text-white font-par  text-md md:text-lg dark:text-blue duration-300">
                {p.description}
              </p>
              <div className="md:flex gap-4">
                <LinkC
                  to={p.link}
                  className="flex items-center bg-green py-2 px-16 rounded-xl hover:bg-[#cbf259] transition duration-200"
                >
                  <h1 className=" text-blue text-xl font-heading">View</h1>
                </LinkC>
                <LinkC
                  to={p.readmore}
                  className="flex items-center border-turq border-[3px] py-2 px-12 rounded-xl hover:border-green transition duration-200 dark:border-lborder dark:duration-300 dark:border-2 dark:hover:border-green"
                >
                  <h1 className="text-green text-xl font-heading dark:text-turq ">Read more</h1>
                </LinkC>
              </div>
            </div>
          </div>
        </div>
      </LinkC>
    </div>
  );
}
function Projects() {
  const pRdesc = [...Pr].sort((a, b) => b.id - a.id);
  return (
    <>
      <div className="row lg:col">
        <div className="hidden lg:py-10 lg:gap-10 lg:flex lg:flex-col">
          {pRdesc.map((p, index) => (
            <AnimateOnScroll>
              <Project key={p.id} p={p} />
            </AnimateOnScroll>
          ))}
        </div>
        <div className=" lg:hidden py-10 gap-5 flex flex-col">
          {pRdesc.map((p, index) => (
            <ProjectMb key={p.id} p={p} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
