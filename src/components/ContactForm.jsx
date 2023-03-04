import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdovzpvn");
  if (state.succeeded) {
    return (
      <div className="flex flex-col">
        <h1 className="text-green font-heading text-md dark:text-blue">
          Thanks, your message has been sent! 
        </h1>
       
          <h1 className="text-green font-heading text-md dark:text-blue">
          I'll contact with you as soon as possible
        </h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col my-auto">
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col gap-5"
      >
        <label
          className="font-heading text-white text-xl  dark:text-blue duration-300"
          htmlFor="name"
        >
          Name{" "}
        </label>
        <input
          id="name"
          placeholder="Your name"
          type="text"
          size="35"
          className="text-white dark:text-blue flex border-turq border-2 py-2 px-4 rounded-2xl text-md bg-transparent font-par focus:border-green focus:outline-none transition duration-200 max-w-xs md:max-w-none dark:border-lborder dark:duration-300 mb-2"
        ></input>
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label
          className="font-heading text-white text-xl  dark:text-blue duration-300"
          htmlFor="email"
        >
          Email{" "}
        </label>
        <input
          id="email"
          placeholder="user@mail.com"
          type="email"
          size="35"
          name="email"
          className="text-white dark:text-blue flex border-turq border-2 py-2 px-4 rounded-2xl text-md bg-transparent font-par focus:border-green focus:outline-none transition duration-200 max-w-xs md:max-w-none dark:border-lborder dark:duration-300 mb-2"
          required
        ></input>
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label
          className="font-heading text-white text-xl dark:text-blue duration-300"
          htmlFor="message"
        >
          Message{" "}
        </label>
        <input
          id="message"
          placeholder="Hi! I'd be glad to connect with you..."
          type="text"
          size="35"
          name="message"
          required
          className="text-white dark:text-blue flex border-turq border-2 py-2 px-4 rounded-2xl text-md bg-transparent font-par focus:border-green focus:outline-none transition duration-200 max-w-xs md:max-w-none dark:border-lborder dark:duration-300 mb-2"
        ></input>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <div className="flex justify-center lg:justify-start">
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-green font-heading py-3 px-10 rounded-lg text-bluedark hover:bg-[#cbf259] transition duration-200 "
          >
            Submit
          </button>
          <ValidationError errors={state.errors} />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
