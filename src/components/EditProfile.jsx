import Header from "./Header"
import Footer from "./Footer"
import UpButton from "./UpButton"
import ChatButton from "./ChatButton"
import EditProfilePage from "./EditProfilePage"

const EditProfile = ({theme, toggleTheme}) => {
  return(<>
  <Header theme={theme} toggleTheme={toggleTheme} />
  <EditProfilePage />
  <ChatButton theme={theme} />
  <UpButton theme={theme} />
  <Footer theme={theme} />
  </>)
}

export default EditProfile