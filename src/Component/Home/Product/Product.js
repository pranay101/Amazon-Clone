import React from "react";
import classes from "./Product.module.css";
import {useStateValue} from "../../ReactContextAPI/StateProvider/StateProvider";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch data to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
        title:title,
      },
    });
  };
  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <p className={classes.product__title}>{title}</p>
        <p className={classes.product__price}>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.product__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>⭐</p>;
            })}
        </div>
      </div>
      <img alt="Product" src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
