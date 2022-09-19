import Header from "../components/header";
import Breaker from "../components/breaker";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import NavbarCategories from "../components/navbar-categories";
import ProductDetailsSection from "../components/product-details-section";
import { PRODUCT_DETAILS_URL_2 } from "../utils/Constants";
const ProductDetails = () => {
  const [productDetails, setproductDetails] = useState(null);
  const { id } = useParams();
  const URL = `${PRODUCT_DETAILS_URL_2}${id}`;
  let detailsDiv = null;

  useEffect(() => {
    const getProductDetails = () => {
      Axios.get(URL).then((res) => {
        setproductDetails(res.data);
      });
    };
    getProductDetails();
  }, [URL]);
  if (productDetails !== null) {
    const data = productDetails;
    const { rating } = data;
    const { rate } = rating;
    const { count } = rating;
    detailsDiv = (
      <ProductDetailsSection
        productDetails={productDetails}
        rate={rate}
        count={count}
      />
    );
  } else {
    detailsDiv = (
      <div className="product-details-section">
        <div className="loading-div">Loading...</div>
      </div>
    );
  }
  const [category, setCategories] = useState("");
  const setCategory = (catg) => {
    let selected = category;
    selected = catg;
    setCategories(selected);
  };
  return (
    <>
      <div className="container-holder">
        <div className="container">
          <Header />
          <hr />
          <NavbarCategories setCategoryData={setCategory} />
          <Breaker />
          <div className="main-section">{detailsDiv}</div>
          <Breaker />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
