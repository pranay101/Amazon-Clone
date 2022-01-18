import React from 'react'
import classes from "./Subtotal.module.css"
import { useStateValue } from '../../ReactContextAPI/StateProvider/StateProvider'
import {useNavigate} from "react-router-dom"



function Subtotal() {
    const navigate = useNavigate()
    const [{basket},] = useStateValue(); 
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
            <button onClick={e => {navigate("/payment")}}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
