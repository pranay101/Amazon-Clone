import React,{useState} from 'react'
import classes from "./Subtotal.module.css"
import { useStateValue } from '../../ReactContextAPI/StateProvider/StateProvider'
function Subtotal() {

    const [{basket},dispatch] = useStateValue(); 
    const [totalPriceState,settotalPriceState] = useState()
    let totalPrice = 0;
    basket?.forEach(item => {
        totalPrice = totalPrice + item.price
    });

    return (
        <div className={classes.subtotal}>
            <p>Subtotal ({basket?.length} items) : 
            <strong> ₹ {totalPrice}</strong></p>
            <small className={classes.subtotal__gift}>
                <input type={"checkbox"} />
                This Order Contains a gift.
            </small>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
