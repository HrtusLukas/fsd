import { useState, useEffect } from 'react';

const Fetch = () => {
  const [customers, setCustomers] = useState([]);

  
    fetch('https://localhost:7039/api/Customer')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCustomers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  

   

  return (
    <div>
      {customers.map((customer) => (
        <div key={customer.id} style={{ marginBottom: '20px' }}>
          <h2>{customer.email}</h2>
          <p><strong>Password:</strong> {customer.password}</p>
          <p><strong>Created On:</strong> {new Date(customer.created).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
