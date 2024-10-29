import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Calendar, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from "./Footer"
import ChatButton from "./ChatButton"
import UpButton from "./UpButton"

const MyAccount = ({theme, toggleTheme}) => {
  const [userData, setUserData] = useState(null);
  const [debugInfo, setDebugInfo] = useState({
    isLoggedIn: false,
    hasToken: false,
    hasUserData: false,
    rawUserData: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');

      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      console.log(isLoggedIn)
      // Update debug info
      setDebugInfo({
        isLoggedIn: isLoggedIn === 'true',
        hasToken: !!token,
        hasUserData: !!storedUser,
        rawUserData: storedUser,
      });

      if (!isLoggedIn || !token) {
        navigate('/login');
        return;
      }

      try {
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          // Format user data to match your needs
          const formattedUser = {
            id: parsedUser.id || parsedUser.Id,
            email: parsedUser.email || parsedUser.Email,
            firstName: parsedUser.firstName || parsedUser.FirstName,
            lastName: parsedUser.lastName || parsedUser.lastName,
            created: parsedUser.created || parsedUser.Created,
            // Add any other fields you need to map
          };
          setUserData(formattedUser);
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user'); // Clear invalid data
        navigate('/login');
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear(); // Clear all localStorage items
    navigate('/login');
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not available';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  // Debug view when user data is not available
  if (!userData) {
    return (
      <div className="pt-[100px] lg:w-[96.5vw] min-h-[90vh] bg-transparent my-[20px] mx-[20px] flex justify-center">
        <motion.div
          initial={{ y: "-100vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
          className="w-full max-w-[800px] border border-primary rounded-lg p-6"
        >
          <h1 className="text-3xl lg:text-4xl font-[500] mb-6">Account Debug Info</h1>
          <div className="space-y-4">
            <div className="border border-primary rounded-lg p-4">
              <h2 className="text-xl font-[500] mb-4">Authentication Status</h2>
              <ul className="space-y-2">
                <li>Is Logged In: {debugInfo.isLoggedIn ? '✅' : '❌'}</li>
                <li>Has Token: {debugInfo.hasToken ? '✅' : '❌'}</li>
                <li>Has User Data: {debugInfo.hasUserData ? '✅' : '❌'}</li>
              </ul>
            </div>

            <div className="border border-primary rounded-lg p-4">
              <h2 className="text-xl font-[500] mb-4">Stored Data</h2>
              <div className="bg-gray-100 p-4 rounded">
                <pre className="whitespace-pre-wrap break-words text-sm">
                  {JSON.stringify(debugInfo.rawUserData, null, 2)}
                </pre>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                className="border border-primary px-4 py-2 rounded-lg hover:bg-secondary hover:text-white transition-colors duration-300"
                onClick={() => navigate('/login')}
              >
                Return to Login
              </button>
              <button
                className="border border-primary px-4 py-2 rounded-lg hover:bg-secondary hover:text-white transition-colors duration-300"
                onClick={handleLogout}
              >
                Clear Data & Logout
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Main account view
  return (<>
  <Header theme={theme} toggleTheme={toggleTheme}/>
    <div className="pt-[100px] lg:w-[96.5vw] min-h-[90vh] bg-transparent my-[20px] mx-[20px] flex justify-center text-primary" >
      <motion.div
        initial={{ y: "-100vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
        className="w-full max-w-[800px]"
      >
        <div className="border border-primary rounded-lg">
          <div className="border-b border-primary p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl lg:text-4xl font-[500]">My Account</h1>
              <button
                className="border border-primary px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-secondary hover:text-white transition-colors duration-300"
                onClick={handleLogout}
              >
                {theme === "light" ? <LogOut className='text-primary' size={16} /> : <LogOut className='text-secondary' size={16} />}
                Logout
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-[500] flex items-center gap-2">
                {theme === "light" ? <User className='text-primary'  /> : <User className='text-secondary'  />}
                  Profile Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4 p-4 border border-primary rounded-lg">
                  <div className="flex items-center gap-3">
                  {theme === "light" ? <Mail className='text-primary'  /> : <Mail className='text-secondary'  />}
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p>{userData.email || 'Not provided'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                  {theme === "light" ? <User className='text-primary'  /> : <User className='text-secondary'  />}
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p>{userData.firstName + " " +  userData.lastName|| 'Not provided'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                  {theme === "light" ? <Calendar className='text-primary'  /> : <Calendar className='text-secondary'  />}
                    <div>
                      <p className="text-sm text-gray-500">Member Since</p>
                      <p>{formatDate(userData.created)}</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="space-y-4">
                <h2 className="text-2xl font-[500] flex items-center gap-2">
                {theme === "light" ? <Settings className='text-primary'  /> : <Settings className='text-secondary'  />}
                  Account Settings
                </h2>
                <div className="space-y-3">
                  <button
                    className="border border-primary px-4 py-2 rounded-lg w-full text-left hover:bg-secondary hover:text-white transition-colors duration-300"
                    onClick={() => navigate('/account/edit-profile')}
                  >
                    Edit Profile Information
                  </button>
                  <button
                    className="border border-primary px-4 py-2 rounded-lg w-full text-left hover:bg-secondary hover:text-white transition-colors duration-300"
                    onClick={() => navigate('/account/change-password')}
                  >
                    Change Password
                  </button>
                  <button
                    className="border border-primary px-4 py-2 rounded-lg w-full text-left hover:bg-secondary hover:text-white transition-colors duration-300"
                    onClick={() => navigate('/account/preferences')}
                  >
                    Update Preferences
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    <ChatButton theme={theme}  />
    <UpButton theme={theme} />
    <Footer theme={theme}/>
    </>
  );
};

export default MyAccount;