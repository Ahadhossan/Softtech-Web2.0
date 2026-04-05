import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home/Home";
import Footer from "./common/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import About from "./components/About/About";
import Success from "./components/Success/Success";
import Work from "./components/Work/Work";
import Blog from "./components/Blog/Blog";
import FreshGrads from "./components/FreshGrads/FreshGrads";
import Softtech from "./components/Softtech/Softtech";
import OpenPositions from "./components/OpenPositions/OpenPositions";

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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
