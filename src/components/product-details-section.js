import RatingBar from "../components/rating-bar";

const ProductDetailsSection = (props) => {
  const productDetails = props.productDetails;
  const rate = props.rate;
  const count = props.count;
  return (
    <div className="product-details-section">
      <img
        src={productDetails.image}
        alt="none"
        className="product-details-section-img"
      />
      <div className="product-details-section-details">
        <h1>{productDetails.title}</h1>
        <h3>$ {productDetails.price}</h3>
        <p>{productDetails.description}</p>
        <div className="product-details-section-details-rating">
          <RatingBar rateValue={rate} />
          <p>({count} Reviews)</p>
        </div>
        <br />
        <button className="product-details-section-details-addtoCart">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default ProductDetailsSection;
