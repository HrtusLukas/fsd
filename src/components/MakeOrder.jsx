import Header from "./Header";
import Footer from "./Footer";
import ChatButton from "./ChatButton";
import UpButton from "./UpButton";
import OrderForm from "./OrderForm";

const MakeOrder = ({ theme, toggleTheme }) => {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <ChatButton theme={theme} />
      <OrderForm />
      <UpButton theme={theme} />
      <Footer theme={theme} />
    </>
  );
};

export default MakeOrder;