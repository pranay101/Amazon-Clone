import React from "react";
import classes from "./Checkout.module.css";
import Subtotal from "./Subtotal/Subtotal";
function Checkout() {
  return (
    <div className={classes.checkout}>
      <div className={classes.checkout__left}>
        <img
          className={classes.checkout__ad}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
            <h2 className={classes.checkout__title}>I am the Shopping basket</h2>
        </div>
      </div>
      <div className={classes.checkout__right}>
          <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
