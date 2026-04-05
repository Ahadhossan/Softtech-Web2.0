import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home/Home";
import Navbar from "./components/Header/Navbar";
import Footer from "./common/Footer/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
