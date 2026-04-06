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
import AndroidApp from "./components/ServiceComponent/AndroidApp";
import UiDesign from "./components/ServiceComponent/UiDesign";
import Backend from "./components/ServiceComponent/Backend";
import CustomerSoftware from "./components/ServiceComponent/CustomerSoftware";
import SoftwareTest from "./components/ServiceComponent/SoftwareTest";
import SoftwareConsulting from "./components/ServiceComponent/SoftwareConsulting";
import Frontend from "./components/ServiceComponent/Frontend";
import Enterprise from "./components/ServiceComponent/Enterprise";
import MobileApp from "./components/ServiceComponent/MobileApp";
import WebApp from "./components/ServiceComponent/WebApp";
import IosApp from "./components/ServiceComponent/IosApp";
import Odoo from "./components/ServiceComponent/Odoo";
import CyberSecurity from "./components/ServiceComponent/CyberSecurity";
import CloudServices from "./components/ServiceComponent/CloudServices";

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

        {/* Service */}
        {/* Services */}
        <Route path="/ui" element={<UiDesign />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/customersoftware" element={<CustomerSoftware />} />
        <Route path="/softwaretest" element={<SoftwareTest />} />
        <Route path="/softwareconsulting" element={<SoftwareConsulting />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/mobileapp" element={<MobileApp />} />
        <Route path="/androidapp" element={<AndroidApp />} />
        <Route path="/iosapp" element={<IosApp />} />
        <Route path="/webapp" element={<WebApp />} />
        <Route path="/odoo" element={<Odoo />} />
        <Route path="/cyber" element={<CyberSecurity />} />
        <Route path="/cloud" element={<CloudServices />} />

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
