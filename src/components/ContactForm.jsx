import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

const ContactForm = () => {

  const ContactEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_5i2er16', 'template_fdnbhjh', e.target, 'wnv2yFmayPbQS9epu')

    document.getElementById("emailfrom").value = ''
    alert("yes")
  }


  return(<motion.form onSubmit={ContactEmail} initial={{ x: "200vw", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 30, duration: 1.2 }} className="flex flex-col gap-y-4" method="post">
  <div>
    <h1 className="text-primary text-4xl">Napíšte nám</h1>
  </div>
  <div>
    <input name="from_name" id="fromname"
      className="focus:outline-none w-[100%] h-[60px] rounded-[15px] px-[20px] text-left"
      type="text"
      placeholder="Vaše meno a priezvisko"
    />
  </div>
  <div className="flex gap-x-4">
    <input name="email_from" id="emailfrom"
      className="focus:outline-none w-[100%] h-[60px] rounded-[15px] px-[20px] text-left"
      type="text"
      placeholder="Váš e-mail"
    />
    <input name="phone" id="phone"
      className="focus:outline-none w-[100%] h-[60px] rounded-[15px] px-[20px] text-left"
      type="text"
      placeholder="Telefónny kontakt"
    />
  </div>
  <div>
    <textarea name="message" id="message"
      className="focus:outline-none w-[100%] py-3 h-[120px] rounded-[15px] px-[20px] text-left"
      placeholder="Vaša správa"
    />
  </div>
  <div>
    <input required type="checkbox" name="" id="checkid" />
    <label id="checkid" className="text-primary" htmlFor="checkid">
      Prečítal(a) som si a súhlasím s prehlásením o{" "}
      <span className="text-blue-400 cursor-pointer">
        ochrane osobných údajov*
      </span>
    </label>
  </div>
  <div className="hover:text-white cursor-pointer bg-secondary w-[170px] h-[55px] rounded-[15px] flex justify-center items-center">
    <input type="submit" value="ODOSLAŤ SPRÁVU" />
  </div>
</motion.form>)
}

export default ContactForm