
import Header from "./Header"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import WebMainPage from "./WebMainPage"
import WebPrice from "./WebPrice"
import Partner from "./Partner"
import WebSolutions from "./WebSolutions"

const WebApp = ({theme, toggleTheme}) => {
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <WebMainPage />
    <WebPrice />
    <WebSolutions />
    <Partner />
    <ChatButton theme={theme} />
    <UpButton theme={theme} />
    <Footer theme={theme} />
  </>)
}

export default WebApp