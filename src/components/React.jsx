
import Header from "./Header"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import ReactMainPage from "./ReactMainPage"
import ReactPrice from "./ReactPrice"
import Partner from "./Partner"
import ReactSolutions from "./ReactSolutions"

const ReactWeb = ({theme, toggleTheme}) => {
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <ReactMainPage />
    <ReactPrice />
    <ReactSolutions />
    <Partner />
    <ChatButton theme={theme} />
    <UpButton theme={theme} />
    <Footer theme={theme} />
  </>)
}

export default ReactWeb