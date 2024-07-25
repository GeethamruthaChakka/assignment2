import React, { useState } from 'react';

function Review({ addReview }) {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      addReview(review.trim());
      setReview('');
    }
  };

  return (
    <div>
      <h3>Reviews</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Type to review"
          style={{ flex: 1, marginRight: '10px', padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Add review</button>
      </form>
    </div>
  );
}

export default Review;