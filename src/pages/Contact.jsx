import React from "react";
import NavBarPages from "../components/NavBarPages";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll.tsx";
import ContactSection from "../components/ContactSection";

function Contact() {
  return (
    <>
      <NavBarPages />
      <AnimateOnScroll>

      <div className="md:my-32">
        <ContactSection />
      </div> 
      </AnimateOnScroll>
      
      <Footer />
    </>
  );
}

export default Contact;
