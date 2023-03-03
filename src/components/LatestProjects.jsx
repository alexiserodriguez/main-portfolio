import React from "react";
import Title from "./Title";
import Pr from "../data/projects.json";
import SliderComponent from "./SliderComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import LinkC from './LinkC'

export function Tech({ t }) {
  const techs = {
    "MS Excel":
      "inline-flex max-h-7 py-0 px-2 border-[2px] rounded-full border-excel ",
    Python:
      "inline-flex max-h-7 py-0 px-2 border-[2px] rounded-full border-python",
    Pandas:
      "inline-flex max-h-7 py-0 px-2 border-[2px] rounded-full border-pandas",
    NumPy:
      "inline-flex max-h-7 py-0 px-2 border-[2px] rounded-full border-numpy",
    Seaborn:
      "inline-flex max-h-7 py-0 px-2 border-[2px] rounded-full border-seaborn",
    SQL: "inline-flex max-h-7 py-0 px-2 border-[2px] rounded-full border-sql",
    MySQL:
      "inline-flex max-h-7 py-0 px-2 border-[2px] rounded-full border-mysql",
    "MS SQL Server":
      "inline-flex max-h-7 py-0 px-2 border-[2px] rounded-full border-mssql",
    PostgreSQL:
      "inline-flex max-h-7 py-0 px-2 border-[2px] rounded-full border-postgresql",
    Tableau:
      "inline-flex max-h-7 py-0 px-2 border-[2px] rounded-full border-tableau",
    Looker:
      "inline-flex max-h-7 py-0 px-2 border-[2px] rounded-full border-looker",
    React:
      "inline-flex max-h-7 py-0 px-2 border-[2px] rounded-full border-react",
  };

  const text = {
    "MS Excel": "p-1 text-xs mx-auto font-heading text-excel",
    Python: "p-1 text-xs mx-auto font-heading text-python",
    Pandas: "p-1 text-xs mx-auto font-heading text-pandas",
    NumPy: "p-1 text-xs mx-auto font-heading text-numpy",
    Seaborn: "p-1 text-xs mx-auto font-heading text-seaborn",
    SQL: "p-1 text-xs mx-auto font-heading text-sql",
    MySQL: "p-1 text-xs mx-auto font-heading text-mysql",
    "MS SQL Server": "p-1 text-xs mx-auto font-heading text-mssql",
    PostgreSQL: "p-1 text-xs mx-auto font-heading text-postgresql",
    Tableau: "p-1 text-xs mx-auto font-heading text-tableau",
    Looker: "p-1 text-xs mx-auto font-heading text-looker",
    React: "p-1 text-xs mx-auto font-heading text-react",
  };

  const techClasses = techs[t];
  const textClasses = text[t];

  return (
    <div className={`${techClasses} `}>
      <h1 className={`${textClasses}`}>{t}</h1>
    </div>
  );
}

export function Project({ p, children }) {
  return (
    <div className="min-w-full md:min-w-0 mx-auto bg-transparent rounded-[40px] shadow-lg overflow-hidden md:max-w-sm hover:bg-[#21385a] hover:scale-105 transition duration-300">
      <LinkC to={`/portfolio/${p.id}`}>
        <div className="shrink-0">
          <img
            className="h-[250px] lg:h-[300px] w-full object-cover object-top h-full lg:w-48 px-[1px]"
            src={p.image}
            alt="Modern building architecture"
            width={500}
          />
        </div>
        <div className="h-[450px] lg:h-100 p-8 border-l-4 border-r-4 border-b-4 rounded-[40px] rounded-t-none border-turq flex flex-wrap justify-between">
          <div className="flex flex-wrap gap-2 max-h-[50px] lg:max-h-[30px]">
            {p.techs.map((t) => (
              <Tech t={t} />
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="block mt-1 text-xl lg:text-2xl leading-tight font-heading text-white">
              {p.title}
            </h1>
            <p className="mt-2 text-white font-par  text-md lg:text-md">
              {p.description}
            </p>
            <h1 className="block mt-1 text-md lg:text-lg leading-tight font-heading text-white">
              {p.date}
            </h1>
            <div className="flex justify-start lg:flex gap-2">
              <LinkC
                to={p.link}
                className="flex items-center bg-green py-2 px-8 rounded-xl hover:bg-[#cbf259] transition duration-200"
              >
                <h1 className=" text-blue text-sm font-heading">View</h1>
              </LinkC>

              <LinkC
                to={p.readmore}
                className="flex items-center border-turq border-[2px] py-2 px-5 rounded-xl hover:border-green transition duration-200"
              >
                <h1 className="text-green text-sm font-heading">Read more</h1>
              </LinkC>
            </div>
          </div>
        </div>
      </LinkC>
    </div>
  );
}
function LatestProjects() {
  const prLength = Pr.length;
  const lastThree = Pr.filter((project) => project.id > prLength - 3);
  const lastThreeDesc = [...lastThree].sort((a, b) => b.id - a.id);
  console.log(lastThree);
  return (
    <div className="row">
      <Title>Latest Projects</Title>
      <div className="hidden lg:py-10 lg:gap-5 lg:flex lg:flex-row">
        {lastThreeDesc.map((p, index) => (
          <Project key={p.id} p={p} />
        ))}
      </div>
      <div className="py-10 gap-5 flex flex-row lg:hidden">
        <SliderComponent>
          <Swiper
            navigation={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            {lastThreeDesc.map((p, index) => (
              <SwiperSlide>
                <Project p={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderComponent>
      </div>
    </div>
  );
}

export default LatestProjects;
