import React from "react";
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorder';

function CheckoutProduct({id, title , price , image , rating , isCartOnly}) {

    const [{}, dispatch] = useStateValue();
    
    const removeItem = () => {
        dispatch(
            {
                type: 'REMOVE',
                id : id
            }
        );
    }
    
    return(
        
        <div className="CheckoutProduct__home">
            
            <img src={image} alt="" />

            <div className="CheckoutProduct__home2">

                <div className="title__img">
                    <p>{title}</p>
                </div>

                <div className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                
                <div className="rating__img">
                <Rating 
                        name="text-feedback"
                        value={rating}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                </div>
                {isCartOnly &&(
                    <button className='remove__from__button' onClick={removeItem}>Remove from cart</button>
                )}
            </div>


        </div>
    )

}

export default CheckoutProduct;