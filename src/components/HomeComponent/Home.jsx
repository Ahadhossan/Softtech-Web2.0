import React from "react";
import Hero from "../../pages/HomePages/Hero";
import Provide from "../../pages/HomePages/Provide";
import Offerings from "../../pages/HomePages/Offerings";
import Work from "../../pages/HomePages/Work";
import Successful from "../../pages/HomePages/Successful";
import Newsletter from "../../common/Newsletter";
import ContactForm from "../../common/ContactForm/ContactForm";
import ScrollToTopButton from "../../common/ScrollToTopButton";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* What we provide section  */}
      <Provide />

      {/* Our Offerings */}
      <section className="p-6 bg-slate-900">
        <div>
          <Offerings />
        </div>
      </section>

      {/* How Can We Work */}
      <Work />

      {/* Successful Softwares */}
      <Successful />

      {/* Newsletter */}
      <Newsletter />

      {/* Contact From */}
      <ContactForm />

      {/* Scrolltop */}
      <ScrollToTopButton />
    </>
  );
};

export default Home;
