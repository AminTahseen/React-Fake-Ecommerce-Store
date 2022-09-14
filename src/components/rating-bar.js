const RatingBar = (props) => {
  let ratingDiv = null;
  const rateValue = props.rateValue;
  const rateInt = Math.floor(rateValue);
  if (rateInt <= 1) {
    ratingDiv = (
      <div className="product-list-item-star-rating">
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
      </div>
    );
  } else if (rateInt <= 2) {
    ratingDiv = (
      <div className="product-list-item-star-rating">
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
      </div>
    );
  } else if (rateInt <= 3) {
    ratingDiv = (
      <div className="product-list-item-star-rating">
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
      </div>
    );
  } else if (rateInt <= 4) {
    ratingDiv = (
      <div className="product-list-item-star-rating">
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
      </div>
    );
  } else if (rateInt <= 5) {
    ratingDiv = (
      <div className="product-list-item-star-rating">
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
        <i class="fas fa-star product-list-item-star-rating-star-filled"></i>
      </div>
    );
  } else {
    <div className="product-list-item-star-rating">
      <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
      <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
      <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
      <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
      <i class="fas fa-star product-list-item-star-rating-star-unfilled"></i>
    </div>;
  }
  return ratingDiv;
};

export default RatingBar;
