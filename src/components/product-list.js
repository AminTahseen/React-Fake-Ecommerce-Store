import Axios from "axios";
import ProductListItem from "./product-list-item";
import { useEffect, useState } from "react";
import { PRODUCTS_URL, PRODUCT_BY_CATEGORY } from "../utils/Constants";
import Pagination from "./pagination";

const ProductList = (props) => {
  let category = props.categoryData.toString().toLowerCase();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [errorMessage, setErrorMessage] = useState("");
  let productSection = null;
  let paginationDiv = null;

  useEffect(() => {
    let URL = PRODUCTS_URL;
    if (category !== "") {
      URL = `${PRODUCT_BY_CATEGORY}${category}`;
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

  const paginate = (number) => setCurrentPage(number);
  if (products) {
    //pagination : get current Products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFistProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
      indexOfFistProduct,
      indexOfLastProduct
    );

    productSection = currentProducts.map((item) => (
      <ProductListItem key={item} productItem={item} />
    ));
    paginationDiv = (
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    );
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
  return (
    <>
      <div className="product-list-section">{productSection}</div>
      <br />
      {paginationDiv}
    </>
  );
};
export default ProductList;
