import React from 'react';

import './cart-item.style.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span clasname="name">{name}</span>
      <span clasname="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
