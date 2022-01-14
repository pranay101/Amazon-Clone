import React, { useState } from "react";
import classes from "./CheckoutProduct.module.css";
import { useStateValue } from "../../ReactContextAPI/StateProvider/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className={classes.CheckoutProduct}>
      <img className={classes.CheckoutProduct__image} src={image} alt="" />
      <div className={classes.CheckoutProduct__info}>
        <p className={classes.CheckoutProduct__title}>{title}</p>
        <p className={classes.CheckoutProduct__price}>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <p className={classes.CheckoutProduct__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </p>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
