
import Header from "./Header"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import WebsiteMainPage from "./WebsiteMainPage"
import WebsitePrice from "./WebsitePrice"
import Partner from "./Partner"
import WebsiteSolutions from "./WebsiteSolutions"

const Website = ({theme, toggleTheme}) => {
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <WebsiteMainPage />
    <WebsitePrice />
    <WebsiteSolutions />
    <Partner />
    <ChatButton theme={theme} />
    <UpButton theme={theme} />
    <Footer theme={theme} />
  </>)
}

export default Website