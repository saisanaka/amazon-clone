import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from './fire';
import Order from './Order';
import { useStateValue } from './StateProvider';

function Orders() {
    const [completed_orders , setCompleted_orders] = useState([]);
    const [{user}] = useStateValue();

    useEffect(()=>{
        if(user){
            console.log("\n\n  user authenticated ....>>>>> ",user);
                db
                    .collection("users")
                    .doc(user.uid)
                    .collection("orders")
                    .orderBy("created", "desc")
                    .onSnapshot((snap) => {
                        setCompleted_orders(snap.docs.map(item => ({
                            id: item.id,
                            data: item.data(),
                        })));
                    });
        }else{
            setCompleted_orders([]);
        }
    },[user])
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders__transfer'>
            {completed_orders.map(item =>
                <Order order={item} />
                )}
        </div>
    </div>
  )
}

export default Orders;