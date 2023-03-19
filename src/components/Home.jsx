import React, { useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import { context } from "../Context";

faker.seed(100);

const Home = () => {
  // const { cart, setCart } = useContext(context);

  const productsArray = [...Array(20)].map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      image: faker.image.abstract(600, 500, true),
    };
  });
  const [products] = useState(productsArray);
  // console.log(products);
  // console.log(cart);

  return (
    <div className="productContainer">
      {products.map((product, i) => {
        return (
          <SingleProduct
            key={i}
            product={product}
            // cart={cart}
            // setCart={setCart}
          />
        );
      })}
    </div>
  );
};

export default Home;
