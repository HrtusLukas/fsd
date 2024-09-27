import Header from "./Header"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import Partner from "./Partner"
import ContactMainPage from "./ContactMainPage"

const ContactPage = ({theme, toggleTheme}) => {
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme}/>
    <ContactMainPage />
    <Partner />
    <Footer theme={theme}/>
    <ChatButton theme={theme}/>
    <UpButton theme={theme}/>
  </>)
}

export default ContactPage