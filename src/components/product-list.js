import Axios from "axios";
import ProductListItem from "./product-list-item";
import { useEffect, useState } from "react";
import { PRODUCTS_URL, PRODUCT_DETAILS_URL } from "../utils/Constants";

const ProductList = (props) => {
  let category = props.categoryData.toString().toLowerCase();
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  let productSection = null;

  useEffect(() => {
    let URL = PRODUCTS_URL;
    if (category !== "") {
      URL = `${PRODUCT_DETAILS_URL}${category}`;
    }
    const getProducts = () => {
      setProducts(null);
      Axios.get(URL)
        .then((res) => {
          setProducts(res.data);
        })
        .catch(function (error) {
          setErrorMessage("An Unexpected Error Occured");
          console.log(`PRODUCTS ERROR : ${error}`);
          setProducts(null);
        });
    };
    getProducts();
  }, [category]);

  if (products) {
    productSection = products.map((item) => (
      <ProductListItem key={item} productItem={item} />
    ));
  } else {
    if (products === null) {
      if (errorMessage !== "") {
        productSection = (
          <div className="loading-div error-text">{errorMessage}</div>
        );
      } else {
        productSection = <div className="loading-div">Loading..</div>;
      }
    } else {
      productSection = <div className="loading-div">Loading...</div>;
    }
  }
  return <div className="product-list-section">{productSection}</div>;
};
export default ProductList;
