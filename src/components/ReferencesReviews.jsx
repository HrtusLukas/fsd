import React, { useState, useEffect } from "react";
import { Star } from 'lucide-react';

const ReferencesReviews = ({ category, customerId }) => {
  const [reviews, setReviews] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState({});  // For handling expanded reviews

  useEffect(() => {
    const fetchReviewsOrdersAndCustomers = async () => {
      setLoading(true);
      setError("");

      try {
        const ordersResponse = await fetch(
          `https://localhost:7039/api/Customer/all-orders`
        );
        if (!ordersResponse.ok) {
          throw new Error(`Failed to fetch orders: ${ordersResponse.statusText}`);
        }
        const fetchedOrders = await ordersResponse.json();
        setOrders(fetchedOrders);

        const reviewsResponse = await fetch(
          `https://localhost:7039/api/Customer/reviews?category=${category}`
        );
        if (!reviewsResponse.ok) {
          throw new Error(`Failed to fetch reviews: ${reviewsResponse.statusText}`);
        }
        const fetchedReviews = await reviewsResponse.json();
        setReviews(fetchedReviews);

        const customersResponse = await fetch(
          `https://localhost:7039/api/Customer`
        );
        if (!customersResponse.ok) {
          throw new Error(`Failed to fetch customers: ${customersResponse.statusText}`);
        }
        const fetchedCustomers = await customersResponse.json();
        setCustomers(fetchedCustomers);
      } catch (err) {
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviewsOrdersAndCustomers();
  }, [category, customerId]);

  const getOrderName = (orderId) => {
    if (orders.length === 0) return "Orders not available";
    const order = orders.find((o) => o.id === orderId);
    return order ? order.name : "Unknown Order";
  };

  const getCustomerName = (customerId) => {
    if (customers.length === 0) return "Customers not available";
    const customer = customers.find((c) => c.id === customerId);
    return customer
      ? `${customer.firstName} ${customer.lastName}`
      : "Unknown Customer";
  };

  const getCustomerImage = (customerId) => {
    if (customers.length === 0) return "Customers not available";
    const customer = customers.find((c) => c.id === customerId);
    return customer
      ? customer.imageUrl
      : "https://via.placeholder.com/150";  
  };

  const handleToggleExpand = (reviewId) => {
    setExpandedReviews((prevState) => ({
      ...prevState,
      [reviewId]: !prevState[reviewId],
    }));
  };

  const totalPages = Math.ceil(reviews.length / 3);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentPageReviews = () => {
    const startIndex = currentPage * 3;  // Show 3 reviews per page
    return reviews.slice(startIndex, startIndex + 3);
  };

  if (loading) return <p aria-live="polite">Loading reviews...</p>;
  if (error) return <p className="text-red-500" aria-live="assertive">{error}</p>;
  if (reviews.length === 0) return <p>No reviews found for {category}.</p>;

  return (
    <div className="w-full py-16 px-4">
      <h2 className="text-center text-3xl font-bold mb-12">Reviews for {category}</h2>
      
      <div className="relative max-w-7xl mx-auto">
        
        {totalPages > 1 && (
          <>
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-9 z-10 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              ←
            </button>
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-9 z-10 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              →
            </button>
          </>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getCurrentPageReviews().map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-6 h-full gap-2 mb-4 flex flex-col"
            >
              <h4 className="text-xl text-black font-semibold ">
                {getOrderName(review.orderId)}
              </h4>
              
              <div className="flex items-center">
                <img
                  src={getCustomerImage(review.customerID)} 
                  alt="Customer Image"
                  className="w-12 h-12 rounded-full mr-2"
                />
                <h3 className="text-black">{getCustomerName(review.customerID)}</h3>
              </div>
              
              <div className="flex flex-row">
                <p className="flex">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <Star fill="yellow" color="yellow" key={index} />
                  ))}
                </p>
              </div>
              <img src={review.imageUrl} alt="" />
              <p className="text-gray-600 mb-4 flex-grow">
                {expandedReviews[review.id]
                  ? review.content
                  : review.content.slice(0, 150) + '...'}
              </p>
              
              <button
                onClick={() => handleToggleExpand(review.id)}
                className="text-blue-500 hover:underline"
              >
                {expandedReviews[review.id] ? "Show Less" : "Read More"}
              </button>

              <div className="mt-auto">
                <p className="text-sm text-gray-500">
                  Created: {new Date(review.created).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferencesReviews;
