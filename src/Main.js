import React, { useState } from 'react';
import ProductName from './ProductName';
import ProductDetails from './ProductDetails';
import Review from './Review';
import ReviewsList from './ReviewsList';

function Main() {
  const [reviews, setReviews] = useState([
    'This product is good.',
    'This product is not great.'
  ]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <ProductName />
      <ProductDetails />
      <Review addReview={addReview} />
      <ReviewsList reviews={reviews} />
    </div>
  );
}

export default Main;