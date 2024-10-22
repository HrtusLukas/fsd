import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CgLogIn } from "react-icons/cg";

const LoginForm = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate("/");
      localStorage.setItem('isLoggedIn');
    }

    fetch('https://localhost:7039/api/Customer')
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); 
        setCustomers(data);
      })
      .catch((error) => {
        console.error('Failed to fetch customers:', error);
        alert('Failed to fetch customers. Please try again later.');
      });
  }, [navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.psw.value;
    console.log("Input Email:", email); 
    console.log("Input Password:", password);
    console.log("Fetched Customers:", customers); 

    const customer = customers.find(cust =>
      cust.email.toLowerCase() === email.toLowerCase() && cust.password === password
    );

    if (customer) {
      alert('Login successful!');
      localStorage.setItem('isLoggedIn', 'true'); 
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="pt-[100px] lg:w-[96.5vw] h-[90vh] bg-transparent my-[20px] mx-[20px] flex justify-center">
      <motion.form
        initial={{ y: "-100vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
        className="w-full max-w-[400px] text-primary border-[1px] border-primary p-4 rounded-lg"
        onSubmit={handleLogin}
      >
        <div className="py-[10px] flex justify-center items-center flex-col border-b-[1px] border-primary gap-y-[10px]">
          <h1 className="text-3xl lg:text-4xl font-[500] text-center">Login</h1>
          <p className="text-center">Welcome back</p>
        </div>
        <div className="flex flex-col py-[20px] h-[50%]">
          <div className="flex justify-center items-center flex-col my-[10px]">
            <label className="flex" htmlFor="email"><b>Email</b></label>
            <input
              className="focus:outline-none w-full h-[40px] rounded-[15px] px-[10px] lg:px-[15px]"
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="flex justify-center items-center flex-col my-[10px]">
            <label className="flex" htmlFor="psw"><b>Password</b></label>
            <input
              className="text-black focus:outline-none w-full h-[40px] rounded-[15px] px-[10px] lg:px-[15px]"
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            />
          </div>
          <div className="flex items-center flex-col gap-y-2">
            <div>
              <input type="checkbox" name="remember" id="remid" />
              <label htmlFor="remid">Remember me</label>
            </div>
            <div>
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center my-[20px]">
            <button
              type="submit"
              className="bg-secondary w-full max-w-[175px] h-[40px] rounded-[15px] font-[500] hover:scale-105 flex items-center justify-center"
            >
              Login <CgLogIn className="ml-2" />
            </button>
          </div>
          <div className="flex justify-center items-center flex-row">
            <p className="text-center">
              Don’t have an account? <Link to="/register" className="text-blue-400">Register</Link>.
            </p>
          </div>
        </div>
      </motion.form>
    </div>
  );
};

export default LoginForm;
