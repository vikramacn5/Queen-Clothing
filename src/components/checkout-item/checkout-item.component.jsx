import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <apan className="name">{name}</apan>
    <apan className="quantity">{quantity}</apan>
    <apan className="price">{price}</apan>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
