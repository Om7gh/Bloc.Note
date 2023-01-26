import React, { Fragment, useEffect, useState } from "react";
import WebLoader from "webfontloader";
import useLocalStorage from "use-local-storage";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Registrition from "./pages/Registrition.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import NotePage from "./pages/NotePage.tsx";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    WebLoader.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, []);

  return (
    <div className="app" data-theme={theme}>
      <Router>
        <div className="toggle-theme" onClick={switchTheme}>
          {theme === "light" ? <BsToggleOff /> : <BsToggleOn />}
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notePage" element={<NotePage />} />
          <Route path="/register" element={<Registrition />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
