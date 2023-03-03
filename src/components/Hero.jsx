import React from "react";
import HeroText from "./HeroText";
import Par from "./Par";
import Alexis from "../assets/Alexis.png";
import Github from "../assets/Github.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Tableau from "../assets/Tableau.svg";
import SocialIcons, { Icon } from "./SocialIcons";

function Hero() {
  return (
    <>
      <div className="hidden grid-rows-2 lg:flex lg:flex-row lg:overflow-hidden">
        <div className="row-start-2 flex flex-wrap flex-col max-w-xl justify-center md:justify-end md:pb-24">
          <HeroText>I'm Alexis Rodriguez.</HeroText>
          <div className="max-w-xl">
            <HeroText>Data Analyst & Web Developer.</HeroText>
          </div>
          <div className="max-w-2xl">
            <Par>
              I feel passion about using storytelling to generate insightful
              tools from complex sources of data, to improve, optimize and add
              value to the decision-making process on high scope scenarios
            </Par>
          </div>
          <div>
            <SocialIcons>
              <Icon
                logo={LinkedIn}
                link="https://www.linkedin.com/in/alexiserodriguez"
              />
              <Icon
                logo={Github}
                link="https://www.github.com/alexiserodriguez"
              />
              <Icon
                logo={Tableau}
                link="https://public.tableau.com/app/profile/alexiserodriguez"
              />
            </SocialIcons>
          </div>
        </div>

        <div className="flex justify-center mx-auto pb-10">
          <img src={Alexis} width={450}></img>
        </div>
      </div>

      <div className="lg:hidden flex justify-center mx-auto pb-10">
        <img src={Alexis} width={450}></img>
      </div>

      <div className="lg:hidden row-start-2 flex flex-wrap flex-col max-w-xl justify-center md:justify-end md:pb-24">
        <HeroText>I'm Alexis Rodriguez.</HeroText>
        <div className="max-w-xl">
          <HeroText>Data Analyst & Web Developer.</HeroText>
        </div>
        <div className="max-w-2xl">
          <Par>
            I feel passion about using storytelling to generate insightful tools
            from complex sources of data, to improve, optimize and add value to
            the decision-making process on high scope scenarios
          </Par>
        </div>
        <div>
          <SocialIcons>
            <Icon
              logo={LinkedIn}
              link="https://www.linkedin.com/in/alexiserodriguez"
            />
            <Icon
              logo={Github}
              link="https://www.github.com/alexiserodriguez"
            />
            <Icon
              logo={Tableau}
              link="https://public.tableau.com/app/profile/alexiserodriguez"
            />
          </SocialIcons>
        </div>
      </div>
    </>
  );
}

export default Hero;
