import Header from "./Header"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import ReferenciesMainPage from "./ReferenciesMainPage"
import Category from "./Category"
import Partner from "./Partner"


const ReferenciesPage = ({theme, toggleTheme}) => {
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme}/>
    <ReferenciesMainPage theme={theme}/>
    <Partner />
    <Footer theme={theme}/>
    <ChatButton theme={theme}/>
    <UpButton theme={theme}/>

  </>)
}

export default ReferenciesPage	