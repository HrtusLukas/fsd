import Header from "./Header"
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"
import WriteReview from "./WriteReview"

const Review = ({theme, toggleTheme}) => {
  return(<>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <WriteReview />
    <ChatButton theme={theme} />
    <UpButton theme={theme} />
    <Footer theme={theme} />
  </>)
}

export default Review