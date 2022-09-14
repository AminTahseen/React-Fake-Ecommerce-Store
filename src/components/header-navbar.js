import { Link } from "react-router-dom";
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
          <Link to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
            &nbsp;
            <span className="navbar-badge">0</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default HeaderNavbar;
