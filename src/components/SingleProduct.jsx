import React from "react";

const SingleProduct = ({ product, cart, setCart }) => {
  //   console.log(product);
  return (
    <div className="products">
      <img src={product.image} alt={product.name} />
      <div className="productDesc">
        <span style={{ fontWeight: "700" }}>{product.name}</span>
        <span>{product.price}</span>
      </div>
      {cart.includes(product) ? (
        <button
          className="add"
          onClick={() => setCart(cart.filter((c) => c.id !== product.id))}
        >
          Remove from cart
        </button>
      ) : (
        <button className="add" onClick={() => setCart([...cart, product])}>
          add to chart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
