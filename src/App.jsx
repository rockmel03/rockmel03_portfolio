import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Articles from "./pages/Articles.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="w-full min-h-screen font-mont bg-light text-dark dark:bg-black dark:text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
