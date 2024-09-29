import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  return(<div className="pt-[100px] w-[96.5vw] h-[90vh] bg-transparent my-[20px] mx-[20px] flex justify-center ">
    <motion.form initial={{ y: "-100vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, duration: 0.5 }} className="w-[40%]  text-primary border-[1px] border-primary" action="action_page.php">
        <div className="py-[10px] flex justify-center items-center flex-col border-b-[1px] border-primary gap-y-[10px]">
          <h1 className="text-5xl font-[500]">Login</h1>
          <p>Welcome back</p>
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

          <div className="flex items-center flex-col gap-y-2">
            <div>
            <input type="checkbox" name="remember" id="remid" />
            <label htmlFor="remid">Remember me</label>
            </div>
            <div>
            <Link>Forgot your password?</Link>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center my-[20px]">
          
          <button type="submit" className="bg-secondary w-[175px] h-[40px] rounded-[15px] font-[500] hover:scale-105">Login</button>
          </div>
        

        <div className="flex justify-center items-center flex-row">
          <p>Don´t have account? <Link to="/register" className="text-blue-400" href="#">Register</Link>.</p>
        </div>
        </div>
      </motion.form>
  </div>)
}

export default Login