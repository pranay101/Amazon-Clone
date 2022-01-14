import React from "react";
import classes from "./Product.module.css";

function Product({title,price,image,rating}) {
  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <p className={classes.product__title}>{title}</p>
        <p className={classes.product__price}>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.product__rating}>
          {
            Array(rating).fill().map((_,i)=>{
              return <p>⭐</p>
            })
          }
          
        </div>
      </div>
      <img alt="Product" src={image} />
        <button>Add to basket</button>
    </div>
  );
}

export default Product;
