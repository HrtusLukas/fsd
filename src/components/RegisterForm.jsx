import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RegisterForm = () => {
  return (
    <div className="pt-[100px] w-[96.5vw] h-[100vh] bg-transparent my-[20px] mx-[20px] flex justify-center ">
      <motion.form initial={{ y: "-100vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 0.5 }} className="w-[50%] text-primary border-[1px] border-primary" action="action_page.php">
        <div className="py-[10px] flex justify-center items-center flex-col border-b-[1px] border-primary gap-y-[10px]">
          <h1 className="text-5xl font-[500]">Register</h1>
          <p>Please fill in this form to create an account.</p>
        </div>

        <div className="flex flex-col  py-[20px] h-[50%] ">
         <div className="flex justify-center items-center flex-col my-[10px]">
          <label className="flex" htmlFor="email"><b>Email</b></label>
          <input className="focus:outline-none w-[50%] h-[40px] rounded-[15px] px-[20px]" type="text" placeholder="Enter Email" name="email" id="email" required />
          </div>
          <div className="flex justify-center items-center flex-col my-[10px]">
          <label className="flex" htmlFor="psw"><b>Password</b></label>
          <input className="text-black focus:outline-none w-[50%] h-[40px] rounded-[15px] px-[20px]" type="password" placeholder="Enter Password" name="psw" id="psw" required />
          </div>
          <div className="flex justify-center items-center flex-col my-[10px] mb-[20px]">
          <label className="flex" htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input className="text-black focus:outline-none w-[50%] h-[40px] rounded-[15px] px-[20px]" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
          </div>
          <div className="flex justify-center flex-col items-center mb-[20px]">
          <p className="mb-[20px]">By creating an account you agree to our <Link to="/aboutus" className="text-blue-400" href="#">Terms & Privacy</Link>.</p>
          <button type="submit" className="bg-secondary w-[175px] h-[40px] rounded-[15px] font-[500] hover:scale-105">Register</button>
          </div>
        

        <div className="flex justify-center items-center flex-row">
          <p>Already have an account? <Link to="/" className="text-blue-400" href="#">Sign in</Link>.</p>
        </div>
        </div>
      </motion.form>
    </div>
  );
}

export default RegisterForm;
