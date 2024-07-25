import React from 'react';

function ReviewsList({ reviews }) {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <h4>Reviewer name</h4>
          <p>{review}</p>
        </div>
      ))}
    </div>
  );
}
export default ReviewsList;