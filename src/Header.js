import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './fire';

function Header() {
    const [{basket , user} ] = useStateValue();
    const logout = () =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to="/">
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
            </Link>
        
        <div className='search'>
            <input type="search" className='search__bar'></input>
            <SearchIcon className='search__icon'></SearchIcon>
            
        </div>
        <div className='header__navbar'>
            <Link to={!user && "/login"}>
            <div onClick={logout} className='Header__option'>
                <div className='LineOne'>
                    <span>Hello {user ? user.email.split("@")[0] : "Guest"}</span>
                    
                </div>
                <div className='LineTwo'>
                    <span>{user? "sign out" : "signin"}</span>
                </div>
            </div>
            </Link>
            <Link to="/orders">
            <div className='Header__option'>
                <div className='LineOne'>
                    <span>returns&</span>
                </div>
                <div className='LineTwo'>
                    <span>orders</span>
                </div>
            </div>
            </Link>

            <div className='Header__option'>
                <div className='LineOne'>
                    <span>Your</span>
                </div>
                <div className='LineTwo'>
                    <span>prime</span>
                </div>
            </div>
            <div className= 'Header__cart'>
                <Link to="/cart">
                    <ShoppingCartIcon className='cart__cla' />
                </Link>
                
                <span className='Count'>
                    {basket.length}
                </span>
            </div>
            
        </div>
    </div>
    );
    
}
export default Header;