import product from "../product.jpg";
import { useEffect, useState } from "react";
import Axios from "axios";
import { PRODUCT_DETAILS_URL } from "../utils/Constants";

const CartTableRow = (props) => {
  console.log("cartTableRow : invokeddd");
  const { productId, quantity } = props;
  const [productDetails, setproductDetails] = useState([]);
  const URL = `${PRODUCT_DETAILS_URL}${productId}`;
  console.log("URL IS : " + URL);
  let detailsDiv = null;
  useEffect(() => {
    console.log("cartTableRow : inside useEffect");
    const getProductDetails = () => {
      Axios.get(URL)
        .then((res) => {
          console.log("cartTableRow : response success : " + res.data);
          setproductDetails(res.data);
        })
        .catch((err) => {
          console.log("cartTableRow : response error : " + err);
        });
    };
    getProductDetails();
  }, [URL]);

  if (productDetails !== null) {
    detailsDiv = (
      <tr>
        <td>
          <img src={product} alt="product" />
        </td>
        <td>Smith</td>
        <td>50</td>
        <td>{quantity}</td>
        <td>50</td>
      </tr>
    );
  }
  return { detailsDiv };
};
export default CartTableRow;
