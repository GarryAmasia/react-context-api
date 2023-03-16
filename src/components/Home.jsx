import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

const Home = () => {
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

  return (
    <div className="productContainer">
      {products.map((product) => {
        return <SingleProduct product={product} />;
      })}
    </div>
  );
};

export default Home;
