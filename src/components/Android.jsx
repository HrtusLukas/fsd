
import Header from "./Header"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import AndroidMainPage from "./AndroidMainPage"
import AndroidPrice from "./AndroidPrice"
import Partner from "./Partner"
import AndroidSolutions from "./AndroidSolutions"

const Android = ({theme, toggleTheme}) => {
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <AndroidMainPage />
    <AndroidPrice />
    <AndroidSolutions />
    <Partner />
    <ChatButton theme={theme} />
    <UpButton theme={theme} />
    <Footer theme={theme} />
  </>)
}

export default Android