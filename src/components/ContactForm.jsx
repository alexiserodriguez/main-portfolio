import React from "react";

function ContactForm() {
  return (
    <div className="flex flex-col my-auto">
      <form className="flex flex-col gap-10">
        <div>
          <p className="font-heading text-white text-xl pb-3 dark:text-blue duration-300">Name </p>
          <input
            placeholder="Your name"
            type="text"
            size="35"
            className="flex border-turq border-2 py-2 px-4 rounded-2xl text-md bg-transparent font-par focus:border-green focus:outline-none transition duration-200 max-w-xs md:max-w-none dark:border-lborder dark:duration-300"
          ></input>    
        </div>
        <div>
          <p className="font-heading text-white text-xl pb-3 dark:text-blue duration-300">Email </p>
          <input
            placeholder="user@mail.com"
            type="email"
            size="35"
            className="flex border-turq border-2 py-2 px-4 rounded-2xl text-md bg-transparent font-par focus:border-green focus:outline-none transition duration-200 max-w-xs md:max-w-none dark:border-lborder dark:duration-300"
          ></input>    
        </div>
        <div>
          <p className="font-heading text-white text-xl pb-3 dark:text-blue duration-300">Message </p>
          <input
            placeholder="Hi! I'd be glad to connect with you..."
            type="text"
            size="35"
            className="flex border-turq border-2 py-2 px-4 rounded-2xl text-md bg-transparent font-par focus:border-green focus:outline-none transition duration-200 max-w-xs md:max-w-none dark:border-lborder dark:duration-300"
          ></input>    
        </div>
        <div className="flex justify-center lg:justify-start">
            <button className="bg-green font-heading py-3 px-10 rounded-lg text-bluedark hover:bg-[#cbf259] transition duration-200 ">
                Submit
            </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
