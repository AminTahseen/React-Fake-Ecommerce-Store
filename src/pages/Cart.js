import Header from "../components/header";
import Breaker from "../components/breaker";
import Footer from "../components/footer";
import Axios from "axios";
import { useEffect, useState } from "react";
import { CART_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const URL = CART_URL;
  let cartItemDiv = null;

  useEffect(() => {
    const getCart = () => {
      Axios.get(URL)
        .then((res) => {
          setCart(res.data);
        })
        .catch(function (error) {
          console.log(`CART ERROR : ${error}`);
          setCart(null);
        });
    };
    getCart();
  }, [URL, cart]);
  if (cart !== null) {
    const { products } = cart;
    cartItemDiv = products.map((item) => {
      const { productId, quantity } = item;
      return (
        <tr>
          <td>
            <Link to={`/product/${productId}`}> See Product</Link>
          </td>
          <td>{quantity}</td>
        </tr>
      );
    });
  } else {
    cartItemDiv = (
      <tr>
        <td>Loading...</td>
        <td>Loading...</td>
      </tr>
    );
  }
  return (
    <>
      <div className="container-holder">
        <div className="container">
          <Header />
          <hr />
          <Breaker />
          <div className="main-section-cart">
            <h2>My Cart</h2>
            <div className="cart-holder">
              <table className="cart-table">
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                </tr>
                {cartItemDiv}
              </table>
            </div>
          </div>
          <Breaker />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Cart;
