import Header from "./Header"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import RegisterForm from "./RegisterForm"


const Register = ({theme, toggleTheme}) => {
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme}/>
    <RegisterForm />
    <ChatButton theme={theme}  />
    <UpButton theme={theme} />
    <Footer theme={theme}/>
  </>)
} 

export default Register