import { Link } from "react-router-dom";
import CartCounter from "./cart-counter";
const HeaderNavbar = () => {
  return (
    <div className="navbar-header">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <CartCounter />
        </li>
      </ul>
    </div>
  );
};
export default HeaderNavbar;
