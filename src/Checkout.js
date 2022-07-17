import React from "react";
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";


function Checkout () {
    const [{basket} ] = useStateValue();
    return(
        <div className="checkout">
            <div className="checkout__left">
                
                <img className="checkout__image" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div className="title">
                    
                    <h2>Your shopping basket</h2>
                </div>
                <div className="display__image">
                    {basket.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        title = {item.title}
                        price = {item.price}
                        rating = {item.rating}
                        image = {item.image}
                        isCartOnly={true}
                    />
                    ))}         
                    
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
                
            </div>

        </div>
    );
}

export default Checkout;