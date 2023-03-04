import React from "react";
import Title from "./Title";
import Sk from "../data/skills.json";

export function TechCard({ t, colorTech }) {
  const borderColors = {
    excel: "flex flex-wrap py-2 px-5 lg:py-5 lg:px-12 min-h-[50px] lg:min-h-[120px] border-[2px] rounded-full border-excel hover:bg-[#21385a] transition duration-200 dark:hover:bg-lhover",
    python: "flex flex-wrap py-2 px-5 lg:py-5 lg:px-12 min-h-[50px] lg:min-h-[120px] border-[2px] rounded-full border-python hover:bg-[#21385a] transition duration-200 dark:hover:bg-lhover dark:border-[#E0C22B]",
    pandas: "flex flex-wrap py-2 px-5 lg:py-5 lg:px-12 min-h-[50px] lg:min-h-[120px] border-[2px] rounded-full border-pandas hover:bg-[#21385a] transition duration-200 dark:hover:bg-lhover",
    numpy: "flex flex-wrap py-2 px-5 md:py-5 lg:px-12 min-h-[50px] lg:min-h-[120px] border-[2px] rounded-full border-numpy hover:bg-[#21385a] transition duration-200 dark:hover:bg-lhover",
    seaborn: "flex flex-wrap py-2 px-5 lg:py-5 lg:px-12 min-h-[50px] lg:min-h-[120px] border-[2px] rounded-full border-seaborn hover:bg-[#21385a] transition duration-200 dark:hover:bg-lhover dark:border-[#487ea5]",
    sql: "flex flex-wrap py-2 px-5 lg:py-5 lg:px-12 min-h-[50px] lg:min-h-[120px] border-[2px] rounded-full border-sql hover:bg-[#21385a] transition duration-200 dark:hover:bg-lhover",
    mysql: "flex flex-wrap py-0 px-5 lg:py-5 lg:px-12 min-h-[50px] lg:min-h-[120px] border-[2px] rounded-full border-mysql hover:bg-[#21385a] transition duration-200 dark:hover:bg-lhover",
    mssql: "flex flex-wrap py-2 px-4 lg:py-5 lg:px-12 min-h-[50px] lg:min-h-[120px] border-[2px] rounded-full border-mssql hover:bg-[#21385a] transition duration-200 dark:hover:bg-lhover",
    postgresql: "flex flex-wrap py-2 px-5 lg:py-5 lg:px-12 min-h-[50px] lg:min-h-[120px] border-[2px] rounded-full border-postgresql hover:bg-[#21385a] transition duration-200 dark:hover:bg-lhover",
    tableau: "flex flex-wrap py-2 px-5 lg:py-5 lg:px-12 min-h-[50px] lg:min-h-[120px] border-[2px] rounded-full border-tableau hover:bg-[#21385a] transition duration-200 dark:hover:bg-lhover",
    looker: "flex flex-wrap  py-2 px-5 lg:py-5 lg:px-12 min-h-[50px] lg:min-h-[120px] border-[2px] rounded-full  border-looker hover:bg-[#21385a] transition duration-200 dark:hover:bg-lhover",
    react: "flex flex-wrap py-2 px-5 lg:py-5 lg:px-12 min-h-[50px] lg:min-h-[120px] border-[2px] rounded-full border-react hover:bg-[#21385a] transition duration-200 dark:hover:bg-lhover"

  };

  const textColors={
    excel: "my-auto text-excel",
    python: "my-auto text-python dark:text-[#E0C22B]",
    pandas: "my-auto text-pandas",
    numpy: "my-auto text-numpy",
    seaborn: "my-auto text-seaborn dark:text-[#487ea5]",
    sql: "my-auto text-sql",
    mysql: "my-auto text-mysql",
    mssql: "my-auto text-mssql",
    postgresql: "my-auto text-postgresql",
    tableau: "my-auto text-tableau",
    looker: "my-auto text-looker",
    react: "my-auto text-react"
  }

  return (
    <div className={`${borderColors[colorTech]}`}>
      <div className="hidden lg:inline-block lg:my-auto lg:max-w-xs ">
        <img src={t.logo} width="60" />
      </div>
      <div className="inline-block my-auto max-w-xs lg:hidden">
        <img src={t.logo} width="25rem" />
      </div>
      <div className={`${textColors[colorTech]}`}>
        <h1 className="text-md lg:text-3xl pl-2 lg:pl-6 mx-auto font-heading">
          {t.tech}
        </h1>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="row">
      <Title>Skills & Tools</Title>
      <div className="mt-8">

      <div className="flex flex-wrap justify-center gap-2 md:gap-6">
        {Sk.map((t, index) => (
          <TechCard key={t.id} colorTech={t.color} t={t} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Skills;
