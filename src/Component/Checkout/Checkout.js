import React, { useState } from "react";
import classes from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";
import { useStateValue } from "../ReactContextAPI/StateProvider/StateProvider";

function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout__left}>
        <img
          className={classes.checkout__ad}
          src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
        />
        <div>
          <h2 className={classes.checkout__user}>Hey {user? user.email:"Guest"}</h2>
          <h2 className={classes.checkout__title}>I am Your Shopping basket</h2>
          {basket.map((item) => {
            return (
              <CheckoutProduct
                id={item.id}
                key={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price} 
              />
            );
          })}
        </div>
      </div>
      <div className={classes.checkout__right}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
