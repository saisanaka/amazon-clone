import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import { BrowserRouter as Router , Switch  , Route } from 'react-router-dom';
import CreateUser from './CreateUser';
import { auth } from './fire';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe("pk_test_51LJwGjSBLssqvkk73wa1ddiPogvauSR6jwFVCyz953aCLnRGETCmThOYC1AZrahj4v12JXMUcMfnBegyAu6q4KP500tp12waqi")

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(
    ()=>{
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
            dispatch({
              type : "SET_USER",
              user: authUser,
            })
        }else{
          dispatch({
            type : "SET_USER",
            user: null,
          })
        }
        
      })
    }
  ,[])
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/cart">
            <Header />
            <Checkout />
          </Route>
          <Route path="/register">
            <CreateUser />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
