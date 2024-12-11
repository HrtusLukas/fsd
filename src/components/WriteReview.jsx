import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const WriteReview = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);

      fetch(`https://localhost:7039/api/Customer/orders?customerId=${parsedUser.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch orders');
          }
          return response.json();
        })
        .then((data) => {
          setOrders(data);
        })
        .catch((error) => {
          setErrorMessage('Failed to load orders. Please try again later.');
        });
    } else {
      setErrorMessage('Please log in to write a review.');
    }
  }, []);

  
  const handleSubmitReview = async () => {
    if (!user) {
      setErrorMessage('You must be logged in to submit a review.');
      return;
    }

    if (!selectedOrder || !review.trim() || rating === 0) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

   
    const orderDetails = orders.find(order => order.id === parseInt(selectedOrder));

    const reviewData = {
      orderId: selectedOrder,
      customerID: user.id,
      rating: rating,
      content: review,
      category: orderDetails?.service || '', 
      created: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://localhost:7039/api/Customer/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      setSuccessMessage('Review submitted successfully!');
      setSelectedOrder('');
      setRating(0);
      setReview('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to submit review. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Write a Review</h2>

      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {errorMessage}
        </div>
      )}

      <div className="space-y-6">
     
        <div className="space-y-2">
          <label htmlFor="order-select" className="block text-sm font-medium text-gray-700">
            Select Order
          </label>
          <select
            id="order-select"
            value={selectedOrder}
            onChange={(e) => setSelectedOrder(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose an order to review</option>
            {orders.map((order) => (
              <option key={order.id} value={order.id}>
                {order.name} - {new Date(order.created).toLocaleDateString()}
              </option>
            ))}
          </select>
        </div>

    
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="focus:outline-none"
              >
                <Star
                  className={`w-8 h-8 ${
                    rating >= star
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-gray-200 text-gray-200'
                  } transition-colors`}
                />
              </button>
            ))}
          </div>
        </div>

   
        <div className="space-y-2">
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">
            Your Review
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here..."
            className="w-full min-h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

     
        <button
          onClick={handleSubmitReview}
          disabled={!selectedOrder || !review.trim() || rating === 0}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default WriteReview;
