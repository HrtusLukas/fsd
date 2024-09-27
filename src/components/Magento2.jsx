
import Header from "./Header"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import Magento2MainPage from "./Magento2MainPage"
import Magento2Price from "./Magento2Price"
import Partner from "./Partner"
import Magento2Solutions from "./Magento2Solutions"

const Magento2 = ({theme, toggleTheme}) => {
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <Magento2MainPage />
    <Magento2Price />
    <Magento2Solutions />
    <Partner />
    <ChatButton theme={theme} />
    <UpButton theme={theme} />
    <Footer theme={theme} />
  </>)
}

export default Magento2