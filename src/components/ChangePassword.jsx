import ChangePasswordPage from "./ChangePasswordPage";
import Header from "./Header";
import Footer from "./Footer";
import ChatButton from "./ChatButton";
import UpButton from "./UpButton";

const ChangePassword = ({ theme, toggleTheme }) => {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <ChangePasswordPage />
      <ChatButton theme={theme} />
      <UpButton theme={theme} />
      <Footer theme={theme} />
    </>
  );
}

export default ChangePassword;