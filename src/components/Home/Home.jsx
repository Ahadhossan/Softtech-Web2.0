import React from "react";
import Hero from "./../../pages/Homepages/Hero";
import Provide from "./../../pages/Homepages/Provide";
import Offerings from "./../../pages/Homepages/Offerings";
import Work from "./../../pages/Homepages/Work";
import Successful from "./../../pages/Homepages/Successful";
import Newsletter from "./../../common/Newsletter";
import ContactForm from "./../../common/ContactForm/ContactForm";
import ScrollToTopButton from "./../../common/ScrollToTopButton";

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
