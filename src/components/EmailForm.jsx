import * as React from "react";
import emailjs from "@emailjs/browser"
const EmailForm = () => {


  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ti488sg', 'template_rt6avbf', e.target, 'wnv2yFmayPbQS9epu')

    document.getElementById("emailTo").value = ''
  }

  return(
    <div className="flex mb-8">
            <form action="" method="post" onSubmit={sendEmail}>
              <input name="email_to" id="emailTo" className="w-[300px] h-[60px] rounded-[15px] px-4 focus:outline-none text-[16px] text-black" placeholder="Zadajte Váš e-mail" type="text" />
              <input className="w-[300px] h-[60px] text-[15px] font-[600] bg-white text-secondary hover:bg-secondary hover:text-primary rounded-[15px] mt-[8px]" type="submit" value="PRIHLÁSIŤ" />
            </form>
          </div>
  )
}

export default EmailForm