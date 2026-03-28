import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Adventures from "./pages/Adventures";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adventures" element={<Adventures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        {/* Protected routes - coming after deployment */}
        <Route path="/login" element={<ComingSoon />} />
        <Route path="/booking" element={<ComingSoon />} />
        <Route path="/airport-pickup" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;