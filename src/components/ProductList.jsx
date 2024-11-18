import React from "react";

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product-item">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: Rp {product.price.toLocaleString()}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ProductList;
