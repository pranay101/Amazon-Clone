import React from "react";
import classes from "./Payment.module.css";
import { useStateValue } from "../ReactContextAPI/StateProvider/StateProvider";
import CheckoutProduct from  "../Checkout/CheckoutProduct/CheckoutProduct"
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className={classes.Payment}>
      <div className={classes.Payment__container}>
          <h1>
              Checkout (<Link to="/checkout">{basket.length} Items</Link>)
          </h1>
        <div className={classes.Payment__section}>
          <div className={classes.Payment__title}>
            <h3>Delivery Address</h3>
          </div>
          <div className={classes.Payment__address}>
            <p>{user?.email}</p>
            <p>Near Decathlon</p>
            <p>Los Vegas</p>
          </div>
        </div>
        <div className={classes.Payment__section}>
          <div className={classes.Payment__title}>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className={classes.Payment__items}>
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
        <div className={classes.Payment__section}>
        <div className={classes.Payment__title}>
            <h3>Payment Method</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
