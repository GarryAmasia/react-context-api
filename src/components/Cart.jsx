import React, { useEffect } from "react";
import SingleProduct from "./SingleProduct";
import { useState } from "react";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, current) => acc + Number(current.price), 0));
  }, [cart]);
  return (
    <div>
      <span style={{ fontSize: "30px" }}>My cart</span>
      <br />
      <span style={{ fontSize: "30px" }}>Total:{total} aud</span>
      <div className="productContainer">
        {cart.map((item, i) => {
          return (
            <SingleProduct
              product={item}
              key={i}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
