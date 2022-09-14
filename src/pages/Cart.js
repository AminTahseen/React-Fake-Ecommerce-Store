import Header from "../components/header";
import Breaker from "../components/breaker";
import Footer from "../components/footer";
const Cart = () => {
  return (
    <>
      <div className="container-holder">
        <div className="container">
          <Header />
          <hr />
          <Breaker />
          <div className="main-section">
            <h2>My Cart</h2>
          </div>
          <Breaker />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Cart;
