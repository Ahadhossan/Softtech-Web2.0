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

function App() {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<Success />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
