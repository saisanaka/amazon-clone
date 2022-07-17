import React , { useRef, useState } from 'react'
import { auth } from "./fire";
import { Link, useHistory } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";

function CreateUser() {
    const history = useHistory();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [password2 , setPassword2] = useState("");
    const [isChecked , setIsChecked] = useState(false);
    const ref = useRef();
    let pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

    const setRef=()=>{
        ref.current.style.display = 'flex';
    }
    const register = e => {
        e.preventDefault();
        if((password === password2) && (password.match(pattern))){
            auth.createUserWithEmailAndPassword(email, password).then(
                (authUser) => {
                    if(authUser){
                        history.push("/");
                    }
                }
            ).catch(
                (err)=>{
                    var userexists = "email-already-in-use";
                    if(err.message.includes(userexists))
                    alert("This email already exists");
                    else
                    alert(err.message);
                }
            )
        }else{
            alert("something went wrong!!!")
        }
    }
  return (
    <div className="login__home">
            <Link to="/">
            <img className="login__home__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__body">
                <form onSubmit={register}>
                <label>
                    <h2>Create account</h2>
                </label>
                <label><h5>Firstname</h5></label>
                <input  className="login__body__input" type="text" name="firstname" placeholder="sai" required /><br></br>
                <label><h5>Lastname</h5></label>
                <input  className="login__body__input" type="text" name="lastname" placeholder="sanaka" required /><br></br>
                <label><h5>E-mail</h5></label>
                <input  onChange={e => setEmail(e.target.value)} className="login__body__input" type="email" name="email" placeholder="sanaka@gmail.com" required /> 
                <label><h5>Password</h5></label>
                <input onChange={e => {setPassword(e.target.value);setRef();}} className="login__body__input" type="password" name="password" placeholder="*********" required /><br></br>
                

                <label><h5>Confirm Password</h5></label>
                <input onChange={e => setPassword2(e.target.value)} className="login__body__input" type="password" name="confirmpassword" placeholder="*********" required /><br></br>
                <div ref={ref} className='password__checklist'>
                    <PasswordChecklist
                    rules={["minLength","specialChar","number","capital","match"]}
                    minLength={8}
                    value={password}
                    valueAgain={password2}
                    />
                </div>
                <p>
                    <input type='checkbox' text="please acknowledge the conditions and use of terms" checked={isChecked} onChange={e=>setIsChecked(!isChecked)} className="checkbox" required />
                   By signing-in you agree to the AMAZON CLONE conditions of use  
                </p>
                
                <input type="submit" value="Create Account" className="login__body__button" />
                   
                
                </form>
            </div>
        </div>
  )
}

export default CreateUser