import React, { useState } from "react";
import './Login.css';
import { auth } from "./fire";
import { Link, useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const signin = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email , password).then(
            (auth) => {
                if(auth){
                    history.push("/")
                }
            }
        ).catch((err)=>{
            alert("Invalid credentials")
        });
    }
    const register = e => {
        e.preventDefault();
        history.push("/register");
    }
    return (
        <div className="login__home">
            <Link to="/">
                <img className="login__home__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__body">
                <form onSubmit={signin}>
                <label>
                    <h2>Sign in</h2>
                </label>
                <label><h5>E-mail</h5></label>
                <input onChange={e => setEmail(e.target.value)} className="login__body__input" type="email" name="email" placeholder="sanaka@gmail.com" required /> 
                <label><h5>Password</h5></label>
                <input onChange={e => setPassword(e.target.value)} className="login__body__input" type="password" name="password" placeholder="*********" required /><br></br>
                
                <input type="submit" value="signin" className="login__body__button" />
                    
                <p>
                    <strong>Doesn't have a account ? </strong>
                </p>
                <button onClick={register} className="create__account__button">
                    Create new amazon account
                </button>
                </form>
            </div>
        </div>
    )
}

export default Login;