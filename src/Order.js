import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';

function Order({order}) {
  return (
    <div className='order'>
        
        <span>Ordered on : {moment.unix(order.data.created).format("MMMM DD YYYY HH:MM:SS")}</span>
        <div className='order__id'>
            <small>Order id : {order.id}</small>
            {order.data.basket.map(item =>(
                <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}

                />
            ))}
        </div>
    </div>
  )
}

export default Order;