import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/HomeComponent/Home";
import Footer from "./common/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import About from "./components/AboutComponent/About/About";
import Success from "./components/AboutComponent/Success/Success";
import Work from "./components/AboutComponent/Work/Work";
import Blog from "./components/AboutComponent/Blog/Blog";
import FreshGrads from "./components/AboutComponent/FreshGrads/FreshGrads";
import Softtech from "./components/AboutComponent/Softtech/Softtech";
import OpenPositions from "./components/AboutComponent/OpenPositions/OpenPositions";
import Contact from "./components/Contact/Contact";
import Industries from "./components/IndustriesComponent/Industries";
import OurProduct from "./components/OurProductComponent/OurProduct";

function App() {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<Success />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/softtech" element={<Softtech />} />
        <Route path="/fresh" element={<FreshGrads />} />
        <Route path="/position" element={<OpenPositions />} />

        {/* industries */}
        <Route path="/industrie" element={<Industries />} />

        {/* OurProduct */}
        <Route path="/product" element={<OurProduct />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
