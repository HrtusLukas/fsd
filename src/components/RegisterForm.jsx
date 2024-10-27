import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordRepeat: "",
    country: null,
    city: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.passwordRepeat) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('https://localhost:7039/api/Customer/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          country: formData.country ? formData.country.label : "",
          city: formData.city ? formData.city.label : "",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful");
      } else {
        alert("Registration failed: " + data.message);
      }
    } catch (error) {
      alert("Error occurred: " + error.message);
    }
  };

  // Countries and Cities dropdown logic
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountriesAndCities = async () => {
      try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/population/cities');
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const result = await response.json();

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
      } finally {
        setLoading(false);
      }
    };

    fetchCountriesAndCities();
  }, []);

  useEffect(() => {
    if (formData.country) {
      setCities(allCities.filter((city) => city.country === formData.country.value));
    }
  }, [formData.country, allCities]);

  if (loading) {
    return <div>Loading...</div>;
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
      "@media (min-width: 1024px)": {
        paddingLeft: "20px",
        paddingRight: "20px",
      },
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%",
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
    <div className="pt-[100px] w-full max-w-[600px] h-[150vh] bg-transparent my-[20px] mx-auto flex justify-center">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: "-100vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
        className="w-full h-[130vh] text-primary border-[1px] border-primary rounded-lg m-3"
      >
        <div className="py-[10px] flex justify-center items-center flex-col border-b-[1px] border-primary gap-y-[10px]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[500]">Register</h1>
          <p>Please fill in this form to create an account.</p>
        </div>
        <div className="flex flex-col py-[20px]">
          <div className="flex justify-center items-center flex-col my-[10px]">
            <label className="flex" htmlFor="firstName"><b>First Name</b></label>
            <input
              className="focus:outline-none w-[75%] h-[40px] rounded-[15px] px-[10px] lg:px-[20px]"
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-center items-center flex-col my-[10px]">
            <label className="flex " htmlFor="lastName"><b>Last Name</b></label>
            <input
              className="focus:outline-none w-[75%] h-[40px] rounded-[15px] px-[10px] lg:px-[20px]"
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center items-center flex-col my-[10px]">
            <label className="flex" htmlFor="email"><b>Email</b></label>
            <input
              className="focus:outline-none w-[75%] h-[40px] rounded-[15px] px-[10px] lg:px-[20px]"
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center items-center flex-col my-[10px]">
            <label className="flex" htmlFor="password"><b>Password</b></label>
            <input
              className="text-black focus:outline-none w-[75%] h-[40px] rounded-[15px] px-[10px] lg:px-[20px]"
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center items-center flex-col my-[10px] mb-[20px]">
            <label className="flex" htmlFor="passwordRepeat"><b>Repeat Password</b></label>
            <input
              className="text-black focus:outline-none w-[75%] h-[40px] rounded-[15px] px-[10px] lg:px-[20px]"
              type="password"
              placeholder="Repeat Password"
              name="passwordRepeat"
              id="passwordRepeat"
              value={formData.passwordRepeat}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center items-center flex-col my-[10px] mb-[20px]">
            <label className="flex" htmlFor="country"><b>Country</b></label>
            <Select
              options={countries}
              value={formData.country}
              onChange={(selectedOption) => setFormData({ ...formData, country: selectedOption })}
              placeholder="Select a country..."
              styles={selectStyles}
              className="w-[75%] h-[40px] rounded-[15px] bg-white border border-gray-300"
            />
          </div>
          <div className="flex justify-center items-center flex-col my-[10px] mb-[20px]">
            <label className="flex" htmlFor="city"><b>City</b></label>
            <Select
              options={cities}
              value={formData.city}
              onChange={(selectedOption) => setFormData({ ...formData, city: selectedOption })}
              placeholder="Select a city..."
              isDisabled={!formData.country}
              styles={selectStyles}
              className="w-[75%] h-[40px] rounded-[15px] bg-white border border-gray-300"
            />
          </div>
          <div className="flex justify-center items-center flex-col my-[10px] mb-[20px]">
            <button
              type="submit"
              className="bg-secondary w-full max-w-[175px] h-[40px] rounded-[15px] font-[500] hover:scale-105 flex items-center justify-center"
            >
              Register
            </button>
          </div>
        </div>
        <div className="text-center">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </motion.form>
    </div>
  );
};

export default RegisterForm;
