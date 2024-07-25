import React, { useState } from 'react';

function ProductDetails() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div style={{ flex: '0 0 auto', marginRight: '20px' }}>
          <img src="/download2.webp" alt="Product" style={{ width: '300px', height: 'auto' }} />
        </div>
        <div style={{ flex: '1 1 auto' }}>
          <h2>Product Name</h2>
          <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
          <h3>₹500.00</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {cartCount === 0 ? (
              <button 
                onClick={handleAddToCart} 
                style={{ 
                  backgroundColor: 'green', 
                  color: 'white', 
                  border: 'none', 
                  padding: '10px 20px', 
                  cursor: 'pointer' 
                }}
              >
                Add to cart
              </button>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button 
                  onClick={handleRemoveFromCart} 
                  style={{ 
                    backgroundColor: 'green', 
                    color: 'white', 
                    border: 'none', 
                    padding: '5px 10px', 
                    cursor: 'pointer', 
                    margin: '0 5px' 
                  }}
                >
                  -
                </button>
                <span style={{ margin: '0 10px', fontSize: '1.2em' }}>{cartCount}</span>
                <button 
                  onClick={handleAddToCart} 
                  style={{ 
                    backgroundColor: 'green', 
                    color: 'white', 
                    border: 'none', 
                    padding: '5px 10px', 
                    cursor: 'pointer', 
                    margin: '0 5px' 
                  }}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <h3>Product specifications</h3>
      <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
    </div>
  );
}

export default ProductDetails;