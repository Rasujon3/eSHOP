import React from "react";
import "../Product/Product.css";

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>
            Lenovo Casual Laptop Briefcase T210 (Toploader) 15.6-inch Water
            Repellent Blue
          </p>
          <p className="product__price">
            <small>$</small>
            <strong>30</strong>
          </p>
          <div className="product__rating">⭐⭐</div>
        </div>
        <img
          src="https://m.media-amazon.com/images/I/71HsqsVYlpL._SL1000_.jpg"
          alt="product-image"
        />
        <button>Add to busket</button>
      </div>
    </div>
  );
}

export default Product;
