import React from "react";

const SingleProduct = ({ product }) => {
  console.log(product);
  return (
    <div className="products">
      <img src={product.image} alt={product.name} />
      <div className="productDesc">
        <span style={{ fontWeight: "700" }}>{product.name}</span>
        <span>{product.price}</span>
      </div>
      <button className="add">add to chart</button>
    </div>
  );
};

export default SingleProduct;
