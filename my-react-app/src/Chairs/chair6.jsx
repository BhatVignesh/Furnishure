import React, { useState } from 'react';
import './Chair1.css'
import IMAGES from './cahimage';

function Chair6() {
  const unitPrice = 17999;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    IMAGES.c6_1,
    IMAGES.c6_2,
    IMAGES.c6_3
  ];

  function handleQuantityChange(e) {
    setQuantity(parseInt(e.target.value, 10));
  }

  const totalPrice = (quantity * unitPrice).toFixed(2);

  return (<>
    <br />
    <br />
    <div className="product-container">
      <div className="product-image">
        <div className="big-image"><img src={images[selectedImage]} alt="Furniture" /></div>
        <div className="image-gallery">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ₹{index + 1}`}
              className={`thumbnail ₹{index === selectedImage ? 'active' : ''}`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h2>Harmony Lounge Chair</h2>
        <p className="price">₹{unitPrice.toFixed(2)}</p>
        <div className="quantity-container">
          <label htmlFor="quantity">Quantity:</label>
          <select
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <p className="total-price">Total Price: ₹{totalPrice}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
    <div className="description">
    <h2>Product details</h2>
    <p>Classic design with soft, rounded shapes and generously sized armrests makes VISKAFORS armchair a statement piece in any living room.

The deep seat with pocket springs is really soft and creates an inviting, embracing feel when you sit on the armchair.

Skillful craftsmanship and a perfect fit means that the armchair will always shows off its best side.

The cover in cotton and polyester fabric is dyed in different tones, which gives it a nice effect. The strong and hardwearing woven quality gives the fabric a clear texture.</p>
    <h2>Measurements</h2>
    <p>
    <li>Depth: 86 cm (33 7/8 ")</li>

    <li>Height: 99 cm (39 ")</li>

    <li>Seat depth: 54 cm (21 1/4 ")</li>

    <li>Seat height: 44 cm (17 3/8 ")</li>

    <li>Seat width: 54 cm (21 1/4 ")</li>

    <li>Width: 82 cm (32 1/4 ")</li>


      
    </p>
    </div>
    
    </>
    
  );
}
export default Chair6;