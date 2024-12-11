import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const calculatePrice = (formData) => {
  const { service, subService, pages } = formData;

  if (service === "custom") {
    return 75; 
  }

  let basePrice = 0;
  let pagePrice = 0;

  if (subService === "ASP.NET Blazor") {
    basePrice = 6490;
    pagePrice = 150;
  } else if (subService === "React") {
    basePrice = 3900;
    pagePrice = 100;
  } else if (service === "company-web") {
    basePrice = 1900;
    pagePrice = 30;
  }

  const additionalPages = Math.max(0, pages - 5);
  const total = basePrice + pagePrice * additionalPages;

  return total > 0 ? total : 0;
};

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    subService: "",
    pages: 5,
    requirements: "",
    price: 0,
    customerID: 0
  });

  const [displayPrice, setDisplayPrice] = useState("");

  useEffect(() => {
    const calculatedPrice = calculatePrice(formData);
    setFormData(prev => ({ ...prev, price: calculatedPrice }));
    setDisplayPrice(calculatedPrice > 0 ? `$${calculatedPrice}` : "Please fill the form");
  }, [formData.service, formData.subService, formData.pages]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: name === "pages" ? Math.max(5, parseInt(value, 10) || 0) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const customer = JSON.parse(localStorage.getItem("user"));
    if (!customer || !customer.id) {
      alert("Customer data not found. Please log in again.");
      return;
    }

    const order = {
      name: formData.name,
      service: formData.service,
      subService: formData.subService,
      pages: formData.pages,
      requirements: formData.requirements,
      price: formData.price,
      customerID: customer.id
    };

    try {
      const response = await fetch('https://localhost:7039/api/Customer/order', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        setFormData({
          name: "",
          service: "",
          subService: "",
          pages: 5,
          requirements: "",
          price: 0,
          customerID: 0
        });
        setDisplayPrice("");
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error submitting the order:", error);
      alert("An error occurred while submitting your order. Please try again.");
    }
  };

  return (
    <div className="pt-[100px] w-full max-w-[600px] h-auto bg-transparent my-[20px] mx-auto flex justify-center">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: "-100vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
        className="w-full h-auto text-primary border-[1px] border-primary rounded-lg m-3"
      >
        <div className="py-[10px] flex justify-center items-center flex-col border-b-[1px] border-primary gap-y-[10px]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[500]">Make an Order</h1>
        </div>
        <div className="flex flex-col py-[20px]">
          <div className="flex justify-center items-center flex-col my-[10px] mb-[20px]">
            <label className="flex" htmlFor="name">
              <b>Name of your Project:</b>
            </label>
            <input
              type="text"
              name="name"
              className="focus:outline-none w-[75%] text-black h-[40px] rounded-[15px] p-[10px] lg:px-[20px]"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center items-center flex-col my-[10px]">
            <label className="flex" htmlFor="service">
              <b>Select Service:</b>
            </label>
            <select
              className="focus:outline-none w-[75%] h-[40px] text-black rounded-[15px] px-[10px] lg:px-[20px]"
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="eshop">E-shop</option>
              <option value="custom">Custom Programming</option>
              <option value="company-web">Company Website</option>
            </select>
          </div>
          {formData.service === "eshop" && (
            <div className="flex justify-center items-center flex-col my-[10px]">
              <label className="flex" htmlFor="subService">
                <b>Select Sub-Service:</b>
              </label>
              <select
                className="focus:outline-none w-[75%] text-black h-[40px] rounded-[15px] px-[10px] lg:px-[20px]"
                name="subService"
                id="subService"
                value={formData.subService}
                onChange={handleChange}
                required
              >
                <option value="">Select a sub-service</option>
                <option value="ASP.NET Blazor">ASP.NET Blazor</option>
                <option value="React">React</option>
              </select>
            </div>
          )}
          {formData.service === "custom" && (
            <div className="flex justify-center items-center flex-col my-[10px]">
              <label className="flex" htmlFor="subService">
                <b>Select Sub-Service:</b>
              </label>
              <select
                className="focus:outline-none w-[75%] text-black h-[40px] rounded-[15px] px-[10px] lg:px-[20px]"
                name="subService"
                id="subService"
                value={formData.subService}
                onChange={handleChange}
                required
              >
                <option value="">Select a sub-service</option>
                <option value="webApp">Web Application</option>
                <option value="mobileApp">Mobile Application</option>
              </select>
            </div>
          )}
          {(formData.service === "eshop" || formData.service === "company-web") && (
            <div className="flex justify-center items-center flex-col my-[10px]">
              <label className="flex" htmlFor="pages">
                <b>Number of Pages:</b>
              </label>
              <input
                className="focus:outline-none w-[75%] text-black h-[40px] rounded-[15px] px-[10px] lg:px-[20px]"
                type="number"
                name="pages"
                id="pages"
                value={formData.pages}
                onChange={handleChange}
                required
                min="5"
              />
            </div>
          )}
          <div className="flex justify-center items-center flex-col my-[10px] mb-[20px]">
            <label className="flex" htmlFor="requirements">
              <b>Custom Requirements:</b>
            </label>
            <textarea
              className="focus:outline-none w-[75%] h-[80px] text-black rounded-[15px] p-[10px] lg:px-[20px]"
              placeholder="Enter your custom requirements"
              name="requirements"
              id="requirements"
              value={formData.requirements}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center items-center flex-col my-[10px] mb-[20px] text-xl font-medium">
            {(formData.service === "eshop" || formData.service === "company-web" ? <p>Total Price: {displayPrice}</p> : <p>Total Price: {displayPrice}/hour</p>)}
          </div>
          <div className="flex justify-center items-center flex-col my-[10px] mb-[20px]">
            <button
              type="submit"
              className="bg-secondary w-full max-w-[175px] h-[40px] rounded-[15px] font-[500] hover:scale-105 flex items-center justify-center"
            >
              Place Order
            </button>
          </div>
        </div>
      </motion.form>
    </div>
  );
};

export default OrderForm;