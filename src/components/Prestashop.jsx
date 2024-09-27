
import Header from "./Header"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import PrestashopMainPage from "./PrestashopMainPage"
import PrestashopPrice from "./PrestashopPrice"
import Partner from "./Partner"
import PrestashopSolutions from "./PrestashopSolutions"

const Prestashop = ({theme, toggleTheme}) => {
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <PrestashopMainPage />
    <PrestashopPrice />
    <PrestashopSolutions />
    <Partner />
    <ChatButton theme={theme} />
    <UpButton theme={theme} />
    <Footer theme={theme} />
  </>)
}

export default Prestashop