import React from "react";

import { Product } from "../../Constants/Product";
import "./product-styles.css";

export function ProductList() {
  return (
    <div>
      <div className="product-list">
        {Product.map((product, index) => (
          <div className="product" key={index}>
            {product}
          </div>
        ))}
      </div>
    </div>
  );
}
