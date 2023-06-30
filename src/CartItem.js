import React from "react";
// import {
//   AccessAlarmIcon,
//   ThreeDRotation,
//   AddCircleIcon,
// } from "@mui/icons-material";
// import AddCircleIcon from '@mui/icons-material/AddCircle';

class CartItem extends React.Component {
  render() {
    const { qty, price, title } = this.props.product;
    const { product } = this.props;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img
            style={{
              height: 110,
              width: 110,
              borderRadius: 5,
              background: "#ccc",
            }}
            src={product.img}
          />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>
          <div style={{ color: "#777" }}>{price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img
              alt="add"
              src="https://image.flaticon.com/icons/svg/1665/1665578.svghttps://https://www.freepik.com/free-icon/add-button-with-plus-symbol-black-circle_735567.htm.flaticon.com/free-icon/plus_330https://cdn-icons-png.flaticon.com/512/32/32360.png?w=740&t=st=1687530986~exp=1687531586~hmac=8af6f95f107c65a040f86a455de1506766e31f8214f441b78028bd55e8fbc8923893?term=plus+sign&page=1&position=10&origin=search&related_id=3303893"
              className="action-icons"
              onClick={() => this.props.onIncreaseQuantity(product)}
            />
            <img
              alt="minus"
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
              className="action-icons"
              onClick={() => this.props.onDecreaseQuantity(product)}
            />

            <img
              alt="delete"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              className="action-icons"
              onClick={() => this.props.onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
