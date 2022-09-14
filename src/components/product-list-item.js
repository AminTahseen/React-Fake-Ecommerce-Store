import { Link } from "react-router-dom";
import RatingBar from "./rating-bar";

const ProductListItem = (props) => {
  const productItem = props.productItem;
  const { rate } = productItem.rating;

  let title = "";

  if (/\r|\n/.exec(productItem.title) !== -1) {
    title = productItem.title.toString().substring(0, 18) + "...";
  } else {
    title = productItem.title;
  }
  return (
    <div className="product-list-item">
      <img
        src={productItem.image}
        alt="none"
        className="product-list-item-img"
      />
      <h2 className="product-list-item-title">
        <Link to={`/product/${productItem.id}`}> {title}</Link>
      </h2>
      <RatingBar rateValue={rate} />
      <h3 className="product-list-item-price">$ {productItem.price}</h3>
      <button className="product-list-item-addtoCart">Add To Cart</button>
    </div>
  );
};
export default ProductListItem;
