import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CgLogIn } from "react-icons/cg";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
      if (localStorage.getItem('isLoggedIn') === 'true') {
          navigate("/account");
      }
  }, [navigate]);

  const validateUserData = (userData) => {
      if (!userData) return null;
      
      // Check if userData is already a string (avoid double stringification)
      if (typeof userData === 'string') {
          try {
              userData = JSON.parse(userData);
          } catch (e) {
              console.error('Failed to parse user data string:', e);
              return null;
          }
      }

      // Validate essential user properties with expanded user data
      const validUser = {
          id: userData.id || userData.Id || userData.customerId || userData.CustomerId,
          email: userData.email || userData.Email,
          firstName: userData.firstName || userData.FirstName || userData.firstname || '',
          lastName: userData.lastName || userData.LastName || userData.lastname || '',
          created: userData.created || userData.Created || new Date().toISOString()
      };

      // Check if we have at least an ID and email
      if (!validUser.id || !validUser.email) {
          console.error('Invalid user data structure:', userData);
          return null;
      }

      return validUser;
  };

  const handleLogin = async (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.psw.value;
      setError(null);

      try {
          const response = await fetch('https://localhost:7039/api/Customer/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ Email: email, Password: password }),
          });

          const responseData = await response.json();
          console.log("Login Response Data:", responseData);

          if (!response.ok) {
              throw new Error(responseData.message || responseData.title || 'Invalid email or password');
          }

          // Validate and store token
          const token = responseData.token || responseData.Token || responseData.access_token || responseData.accessToken;
          if (!token) {
              console.error('Token structure:', responseData);
              throw new Error('Authentication token not found in response');
          }

          // Clear any existing auth data
          localStorage.clear();

          // Store new auth data
          localStorage.setItem('token', token);
          localStorage.setItem('isLoggedIn', 'true');

          // Extract and validate user data
          const rawUserData = responseData.user || responseData.User || responseData.customer || responseData.Customer;
          const validatedUser = validateUserData(rawUserData);

          if (validatedUser) {
              try {
                  localStorage.setItem('user', JSON.stringify(validatedUser));
                  console.log("Validated user data stored in localStorage:", validatedUser);
              } catch (e) {
                  console.error('Failed to store user data:', e);
                  // Continue with login even if user storage fails
              }
          } else {
              console.warn('Invalid or missing user data in response:', responseData);
          }

          // Verify storage was successful
          const storedUser = localStorage.getItem('user');
          console.log("Verification - Stored user data:", storedUser);

          navigate('/account');
      } catch (error) {
          console.error('Login error:', error);
          setError(error.message || 'Failed to login. Please try again.');
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
                            className="focus:outline-none w-full h-[40px] text-black rounded-[15px] px-[10px] lg:px-[15px]"
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
                            className="bg-secondary w-full max-w-[175px] h-[40px] rounded-[15px] font-[500] hover:scale-105 flex items-center justify-center gap-x-[10px]"
                        >
                            <span>Login</span>
                            <CgLogIn />
                        </button>
                        <p className="mt-5">New here? <Link to="/register">Create an account</Link></p>
                    </div>
                </div>
                {error && <p className="text-red-500 text-center">{error}</p>}
            </motion.form>
        </div>
    );
};

export default LoginForm;