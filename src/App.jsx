import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Programs from "./Component/Programs";
import Title from "./Component/Title";
import About from "./Component/About";
import Gallery from "./Component/Gallery";
import Testimonials from "./Component/Testimonials";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="OUR PROGRAM" title="What We Offer" />
        <Programs />
        <About />
        <Title subtitle="GAllery" title="Campus photos" />
        <Gallery />
        <Title subtitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subtitle="contact us " title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
