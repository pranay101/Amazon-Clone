import React from 'react'
import classes from "./Subtotal.module.css"
function Subtotal() {
    return (
        <div className={classes.subtotal}>
            <p>Subtotal (0 items) : <strong>0</strong></p>
            <small className={classes.subtotal__gift}>
                <input type={"checkbox"} />
                This Order Contains a gift.
            </small>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
