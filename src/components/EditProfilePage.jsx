import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    country: '',
  });
  const [errors, setErrors] = useState({});
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (!token || !storedUser) {
      navigate('/login');
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUserId(parsedUser.id);
    setFormData({
      firstName: parsedUser.firstName || '',
      lastName: parsedUser.lastName || '',
      email: parsedUser.email || '',
      city: parsedUser.city || '',
      country: parsedUser.country || '',
      password: localStorage.getItem('password') || '', 
    });
    setIsLoading(false);
  }, [navigate]);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formData.city) newErrors.city = 'City is required.';
    if (!formData.country) newErrors.country = 'Country is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const token = localStorage.getItem('token');

    try {
      const response = await fetch('https://localhost:7039/api/Customer/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          Id: userId, 

        }),
      });

      if (response.ok) {

        const updatedUser = {
          ...formData,
          id: userId, 
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        alert('Profile updated successfully!');
        navigate('/account'); 
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Update failed.');
      }
    } catch (error) {
      setErrorMessage('Network error occurred: ' + error.message);
    }
  };
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-[100px] w-full max-w-[600px] h-auto bg-transparent my-[20px] mx-auto flex justify-center">
      <motion.form
        onSubmit={onSubmit}
        initial={{ y: '-100vw', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, duration: 0.5 }}
        className="w-full text-primary border-[1px] border-primary rounded-lg m-3 p-6"
      >
        <div className="py-[10px] flex justify-center items-center flex-col border-b-[1px] border-primary gap-y-[10px] mb-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[500]">Edit Profile</h1>
        </div>
        <div className="flex flex-col">
          {['firstName', 'lastName', 'email', 'city', 'country'].map((field, index) => (
            <div className="flex justify-center items-center flex-col my-[10px]" key={index}>
              <label className="flex" htmlFor={field}><b>{field.charAt(0).toUpperCase() + field.slice(1)}</b></label>
              <input
                className="focus:outline-none w-[75%] h-[40px] rounded-[15px] px-[10px] lg:px-[20px]"
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                value={formData[field]}
                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                required
              />
              {errors[field] && <div className="text-red-500">{errors[field]}</div>}
            </div>
            
          ))}
          
          <div className="flex justify-center items-center flex-col my-[10px] mb-[20px]">
            <button
              type="submit"
              className="bg-secondary w-full max-w-[175px] h-[40px] rounded-[15px] font-[500] hover:scale-105 flex items-center justify-center"
            >
              Update Profile
            </button>
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </div>
      </motion.form>
    </div>
  );
};

export default EditProfilePage;
