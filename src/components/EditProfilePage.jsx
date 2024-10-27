import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Save, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Select from 'react-select';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: null,
    city: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [allCities, setAllCities] = useState([]);

  useEffect(() => {
    const fetchUserData = () => {
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        navigate('/login');
        return;
      }

      try {
        const userData = JSON.parse(storedUser);
        setFormData(prevData => ({
          ...prevData,
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          email: userData.email || '',
        }));
      } catch (error) {
        console.error('Error parsing user data:', error);
        setError('Failed to load user data');
      }
    };

    const fetchCountriesAndCities = async () => {
      try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/population/cities');
        if (!response.ok) {
          throw new Error('Error fetching location data');
        }
        const result = await response.json();

        // Log the result to check the structure
        console.log('Countries and Cities Response:', result);

        const uniqueCountries = Array.from(
          new Set(result.data.map((oneCountry) => oneCountry.country))
        ).map((country) => ({
          label: country,
          value: country,
        }));

        const citiesData = result.data.map((oneCountry) => ({
          label: oneCountry.city,
          value: oneCountry.city,
          country: oneCountry.country,
        }));

        setCountries(uniqueCountries);
        setAllCities(citiesData);
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to load location data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
    fetchCountriesAndCities();
  }, [navigate]);

  useEffect(() => {
    if (formData.country) {
      setCities(allCities.filter((city) => city.country === formData.country.value));
    }
  }, [formData.country, allCities]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch('https://localhost:7039/api/Customer/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          country: formData.country ? formData.country.label : '',
          city: formData.city ? formData.city.label : '',
        }),
      });

      // Log the response for debugging
      console.log('Profile Update Response:', response);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error Response Data:', errorData);
        throw new Error(errorData.message || 'Failed to update profile');
      }

      // Update stored user data
      const userData = JSON.parse(localStorage.getItem('user'));
      const updatedUserData = {
        ...userData,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      };
      localStorage.setItem('user', JSON.stringify(updatedUserData));

      navigate('/account');
    } catch (error) {
      console.error('Error during profile update:', error);
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <div className="pt-[100px] flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      height: "40px",
      borderRadius: "15px",
      paddingLeft: "10px",
      paddingRight: "10px",
      borderColor: state.isFocused ? "#2998dd" : "#ccc",
      boxShadow: state.isFocused ? "0 0 0 1px #2998dd" : "none",
      "&:hover": {
        borderColor: "#2998dd",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "15px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
      color: state.isSelected ? "#2998dd" : "#333",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
    }),
  };

  return (
    <div className="pt-[100px] lg:w-[96.5vw] min-h-[90vh] bg-transparent my-[20px] mx-[20px] flex justify-center">
      <motion.div
        initial={{ y: "-100vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
        className="w-full max-w-[600px] text-primary"
      >
        <div className="border border-primary rounded-lg">
          <div className="border-b border-primary p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl lg:text-4xl font-[500] flex items-center gap-2">
                <User className="text-secondary" />
                Edit Profile
              </h1>
              <button
                onClick={() => navigate('/account')}
                className="border border-primary px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-secondary hover:text-white transition-colors duration-300"
              >
                <ArrowLeft size={16} />
                Back
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block mb-2" htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-[40px] rounded-[15px] px-[10px] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2" htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full h-[40px] rounded-[15px] px-[10px] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[40px] rounded-[15px] px-[10px] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">Country</label>
                <Select
                  options={countries}
                  value={formData.country}
                  onChange={(selectedOption) => setFormData({ ...formData, country: selectedOption })}
                  styles={selectStyles}
                  className="w-full rounded-[15px] bg-white"
                />
              </div>

              <div>
                <label className="block mb-2">City</label>
                <Select
                  options={cities}
                  value={formData.city}
                  onChange={(selectedOption) => setFormData({ ...formData, city: selectedOption })}
                  isDisabled={!formData.country}
                  styles={selectStyles}
                  className="w-full rounded-[15px] bg-white"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-center py-2">
                {error}
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors duration-300 flex items-center gap-2"
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default EditProfilePage;
