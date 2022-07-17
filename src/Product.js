import React from 'react';
import './Product.css'
import StarIcon from '@mui/icons-material/StarBorder';
import { useStateValue } from './StateProvider';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@mui/material';


var item_id = 0;
function Product ({title , price , rating , image}) {

    const [{},dispatch] = useStateValue();
    
    const notify=()=>{
        toast(title);
    }
    const addToBasket =()=>{
            item_id = item_id+1;
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: item_id,
                    title: title,
                    price: price,
                    rating: rating,
                    image: image
                }
            }
            );
            notify();
    }

    return (
        <div className='product'>
            <div className='product__info'>
                    <p> {title} </p>
                
                <div className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                        
                </div>
                <div className='product__rating'>
                    <Rating 
                        name="text-feedback"
                        value={rating}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                  
                    
                </div>
            </div>
            
            <img className='product__image' src={image} alt=''/>
            <button className='cart__button' onClick={addToBasket}>Add to cart</button>
            <ToastContainer />
        </div>
    );
}
export default Product;