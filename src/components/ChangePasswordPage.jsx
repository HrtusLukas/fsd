import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePasswordPage = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.currentPassword) newErrors.currentPassword = 'Current password is required.';
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required.';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'New password must be at least 6 characters long.';
    }
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    setIsLoading(true);
    const token = localStorage.getItem('token');
    const userId = JSON.parse(localStorage.getItem('user')).id; // Get the user ID from localStorage
  
    try {
      const response = await fetch(`https://localhost:7039/api/Customer/changePassword`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          customerId: userId, // Pass the user ID
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });
  
      if (response.ok) {
        alert('Password changed successfully!');
        navigate('/account');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Password change failed.');
      }
    } catch (error) {
      setErrorMessage('Network error occurred: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-[100px] w-full max-w-[600px] h-auto bg-transparent my-[20px] mx-auto flex justify-center">
      <form onSubmit={onSubmit} className="w-full text-primary border-[1px] border-primary rounded-lg m-3 p-6">
        <div className="py-[10px] flex justify-center items-center flex-col border-b-[1px] border-primary gap-y-[10px] mb-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[500]">Change Password</h1>
        </div>
        <div className="flex flex-col">
          {['currentPassword', 'newPassword', 'confirmPassword'].map((field, index) => (
            <div className="flex justify-center items-center flex-col my-[10px]" key={index}>
              <label className="flex" htmlFor={field}><b>{field.replace(/([A-Z])/g, ' $1').trim()}</b></label>
              <input
                className="focus:outline-none w-[75%] h-[40px] rounded-[15px] px-[10px] lg:px-[20px]"
                type="password"
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
              disabled={isLoading}
            >
              {isLoading ? 'Changing Password...' : 'Change Password'}
            </button>
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordPage;