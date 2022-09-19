import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import { CART_URL } from "../utils/Constants";

const CartCounter = () => {
  const [cart, setCart] = useState(null);
  const URL = CART_URL;
  let bellDiv = null;
  useEffect(() => {
    const getCart = () => {
      Axios.get(URL)
        .then((res) => {
          setCart(res.data);
        })
        .catch(function (error) {
          console.log(`CATEGORIES ERROR : ${error}`);
          setCart(null);
        });
    };
    getCart();
  }, [URL]);
  if (cart != null) {
    const { products } = cart;
    bellDiv = <span className="navbar-badge">{products.length}</span>;
  } else {
    bellDiv = <span className="navbar-badge">0</span>;
  }
  return (
    <Link to="/cart">
      <i class="fa-solid fa-cart-shopping"></i>
      &nbsp;
      {bellDiv}
    </Link>
  );
};

export default CartCounter;
