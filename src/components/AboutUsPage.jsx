import { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ChatButton from "./ChatButton";
import UpButton from "./UpButton";
import AboutUsMainPage from "./AboutUsMainPage";
import TeamPhoto from "./TeamPhoto";
import Pricing from "./Pricing";
import Financing from "./Financing";
import Partner from "./Partner";

const AboutUsPage = ({ theme, toggleTheme }) => {
  

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <AboutUsMainPage />
      <TeamPhoto />
      <Pricing />
      <Financing />
      <Partner />
      <ChatButton theme={theme} />
      <UpButton theme={theme} />
      <Footer theme={theme} />
    </>
  );
};

export default AboutUsPage;
