import React from "react";
import Title from "./Title";
import SocialIcons, { Icon } from "./SocialIcons";
import ContactForm from "./ContactForm";


function ContactSection() {
  return (
    <>
      <div className="hidden lg:flex lg:flex-row lg:justify-center md:gap-52">
        <div className="flex flex-col justify-center align-top">
          <Title>Reach me out!</Title>
          <SocialIcons/>
        </div>
        <div className="flex flex-col h-100">
          <div className="lg:flex lg:row lg:gap-2 lg:mb-8">
            <p className="text-white text-md font-heading dark:text-blue duration-300">
              You can message me at
            </p>
            <p className="text-green text-md font-heading dark:text-turq dark:underline dark:decoration-green dark:underline-offset-[6px] dark:decoration-2">
              alexisrod1997@gmail.com
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-12 lg:hidden">
        <Title>Reach me out!</Title>
        <SocialIcons/>
      </div>
      <div className="flex items-center flex-col h-100 lg:hidden">
        <div className="flex items-center flex-col gap-2 mb-8">
          <p className="text-white text-md font-heading dark:text-blue duration-300">
            You can message me at
          </p>
          <p className="text-green text-md font-heading dark:text-turq dark:underline dark:decoration-green dark:underline-offset-[6px] dark:decoration-2">
            alexisrod1997@gmail.com
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
}

export default ContactSection;
