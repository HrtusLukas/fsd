import Header from "./Header"
import MainPage from "./MainPage"
import ShowedSystems from "./ShowedSystems"
import AboutUs from "./AboutUs"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import Services from "./Services"

const LandingPage = ({theme, toggleTheme}) => {
  
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme}/>
    <MainPage />
    <ShowedSystems />
    <AboutUs />
    <Footer theme={theme}/>
    <ChatButton theme={theme}/>
    <UpButton theme={theme}/>
  </>)
}

export default LandingPage
