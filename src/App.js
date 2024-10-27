import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import ShowedSystems from "./components/ShowedSystems";
import ChatButton from "./components/ChatButton";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import UpButton from "./components/UpButton";
import LandingPage from "./components/LandingPage";
import Switch from "react-switch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Products from "./components/Products";
import Register from "./components/Register";
import ContactPage from "./components/ContactPage";
import ReferenciesPage from "./components/ReferenciesPage";
import { useScroll, useTransform } from "framer-motion";
import AboutUsPage from "./components/AboutUsPage";
import ScrollToTop from "./components/ScrollToTop";
import Blazor from "./components/Blazor";
import ReactWeb from "./components/React";
import WebApp from "./components/WebApp";
import Android from "./components/Android";
import Website from "./components/Website";
import Login from "./components/Login";
import MyAccountPage from "./components/MyAccount";
import EditProfile from "./components/EditProfile";

const App = () => {
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

 
  return (
    <div className={`${theme} font-poppins bg-gradient-to-r from-background to-footer overflow-hidden`}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                theme={theme}
                toggleTheme={toggleTheme}
          />
            }
          />
          <Route
            path="/aboutus"
            element={
              <AboutUsPage
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/references"
            element={
              <ReferenciesPage
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/blazor"
            element={
              <Blazor
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/react"
            element={
              <ReactWeb
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/vyvoj-webovych-aplikacii"
            element={
              <WebApp
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/vyvoj-mobilnych-aplikacii"
            element={
              <Android
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/tvorba-webstranok-na-mieru"
            element={
              <Website
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/account"
            element={
              <MyAccountPage
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/account/edit-profile"
            element={
              <EditProfile
                theme={theme}
                toggleTheme={toggleTheme}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
