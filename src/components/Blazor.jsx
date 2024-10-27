
import Header from "./Header"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import BlazorMainPage from "./BlazorMainPage"
import BlazorPrice from "./BlazorPrice"
import Partner from "./Partner"
import BlazorSolutions from "./BlazorSolutions"

const Blazor = ({theme, toggleTheme}) => {
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <BlazorMainPage />
    <BlazorPrice />
    <BlazorSolutions />
    <Partner />
    <ChatButton theme={theme} />
    <UpButton theme={theme} />
    <Footer theme={theme} />
  </>)
}

export default Blazor