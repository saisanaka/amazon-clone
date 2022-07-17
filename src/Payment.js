import React, { useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { useStripe , useElements , CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import {getTotal} from './reducer.js';
import axios from './axios';
import {useHistory} from 'react-router-dom';
import { db } from './fire';

function Payment() {
    const [{basket , user} , dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [disabled , setDisabled] = useState(false);
    const [error , setError] = useState();
    const [processing , setProcessing] = useState(false);
    const [success , setSuccess] = useState(false);
    const [clientSecret , setClientSecret] = useState('');
    const history = useHistory();

    useEffect(()=>{
        (
            
            async () =>{
                const secret = await axios({
                    method: 'post',
                    url: `/payments/create?total=${getTotal(basket)*100}`,

            })
            setClientSecret(secret.data.clientSecret);
            }
        )();
    },[basket]);

    const handleEvent= async (event) =>{
        event.preventDefault();
        setProcessing(true);
        await stripe.confirmCardPayment(clientSecret ,{
            payment_method:{
                card: elements.getElement(CardElement),
            }
        }).then(({paymentIntent})=>{
            (
                async () => {
                db
                .collection("users")
                .doc(user.uid)
                .collection("orders")
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                });
                }
            )();           
            setSuccess(true);
            setProcessing(false);
            setError(null);
            dispatch({
                type: "EMPTY_BASKET",
            })
            history.replace("/orders");
        })
    }
    const handleKeys=(event)=>{
        if(event){
            setError(event.error ? event.error.message : "");
        }
        setDisabled(false);
        
    }

  return (
    <div className='payment__main'>
        <h1>CheckOut({basket.length} items)</h1>
         <div className='payment__delivery'>
            <div className='delivery__itle'>
                <h2>Delvery Address</h2>
            </div>
            <div className='delivery__address'>
                <span>2-98-1 , south chiruvolu lanka</span><br></br>
                <span>Avanigadda , kishna , 521121</span><br></br>
                <span>Andhra Pradesh</span><br></br>
                <span>India</span>
            </div>
         </div>
         <div className='payment__items'>
            <div className='items__title'>
                <h2>Review Items and Delivery</h2>
            </div>
            <div className='items__list'>
                {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title = {item.title}
                            price = {item.price}
                            rating = {item.rating}
                            image = {item.image}
                        />
                        ))}  
            </div>
         </div>
         <div className='payment__payment' style={{backgroung:"grey"}}>
            <div className='payment__title'>
                <h1 style={{color:"green"}}>Payment</h1>
            </div>
            <div className='payment__card'>
                <form onSubmit={handleEvent}>
                    <CardElement className="card__element"
                        onChange={e=>{handleKeys()}}
                    />
                    <div className='payment__pricetotal'>
                    <CurrencyFormat
                        renderText={(value) => (
                            <p>
                                Order Total: <strong>{value}</strong>
                            </p>
                        )}
                        decimalScale={2}
                        value={getTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    />
                    <button disabled={processing || success || disabled}>
                        <p>
                            {processing ? "processing" : "Buy Now"}
                        </p>
                    </button>
                    </div>
                    {error && <div>error</div>}
                </form>
            </div>
         </div>

    </div>
  )
}

export default Payment;