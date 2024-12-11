import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const ContactEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5i2er16', 'template_fdnbhjh', e.target, 'wnv2yFmayPbQS9epu');

    document.getElementById("emailfrom").value = '';
    alert("Message sent successfully");
  };

  return (
    <motion.form
      onSubmit={ContactEmail}
      initial={{ x: "200vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 30, duration: 1.2 }}
      className="flex flex-col gap-y-4"
      method="post"
    >
      <div>
        <h1 className="text-primary text-4xl">Write to Us</h1>
      </div>
      <div>
        <input
          name="from_name"
          id="fromname"
          className="focus:outline-none w-[100%] h-[60px] rounded-[15px] px-[20px] text-left"
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div className="flex gap-x-4">
        <input
          name="email_from"
          id="emailfrom"
          className="focus:outline-none w-[100%] h-[60px] rounded-[15px] px-[20px] text-left"
          type="text"
          placeholder="Your Email"
        />
        <input
          name="phone"
          id="phone"
          className="focus:outline-none w-[100%] h-[60px] rounded-[15px] px-[20px] text-left"
          type="text"
          placeholder="Phone Contact"
        />
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          className="focus:outline-none w-[100%] py-3 h-[120px] rounded-[15px] px-[20px] text-left"
          placeholder="Your Message"
        />
      </div>
      <div>
        <input required type="checkbox" name="" id="checkid" />
        <label className="text-primary" htmlFor="checkid">
          I have read and agree to the{" "}
          <span className="text-blue-400 cursor-pointer">
            privacy policy*
          </span>
        </label>
      </div>
      <div className="hover:text-white cursor-pointer bg-secondary w-[170px] h-[55px] rounded-[15px] flex justify-center items-center">
        <input type="submit" value="SEND MESSAGE" />
      </div>
    </motion.form>
  );
};

export default ContactForm;
