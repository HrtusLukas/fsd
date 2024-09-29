import Header from "./Header"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import LoginForm from "./LoginForm"


const Login = ({theme, toggleTheme}) => {
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme}/>
    <LoginForm />
    <ChatButton theme={theme}  />
    <UpButton theme={theme} />
    <Footer theme={theme}/>
  </>)
} 

export default Login