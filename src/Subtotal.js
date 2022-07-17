import React from "react";
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getTotal} from "./reducer";
import {useHistory} from "react-router-dom";

export default function Subtotal () {
    const [{basket} ] = useStateValue();
    const history = useHistory()
    return (
        <div className="subtotal">
            <CurrencyFormat
            
                renderText={(value) => (
                    <>
                        <p className="Total__price__and__total__items">
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e =>{history.push("/payment")}} className="Subtotal__button">proceed to checkout</button>
        </div>
    );
}