import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../Context";
import "./style.css";

const Header = () => {
  const { cart } = useContext(context);

  return (
    <div>
      <span className="header">React context api tutorial</span>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart [{cart.length}]</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
