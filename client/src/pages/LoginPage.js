import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function LoginPage(){
  /*
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try{
    await axios.post('/login',{email,password});
        alert('Login Successful');
    }
    catch(e){
        alert('Login Failed');
    }
  }*/
    return(
 <div className="mt-8 grow flex items-center justify-around font-mono" >
  <div className="mb-64">
    <h1 className="text-4xl text-center mb-4 font-mono">Login</h1>
    <form className="max-w-md mx-auto" >
        <input type="email" placeholder="type@email.com"
       // value={email}
       // onChange={ev => setEmail(ev.target.value)}
        />
        <input type="password" placeholder="Password"
       // value={password}
        //onChange={ev => setPassword(ev.target.value)}
        />
        <button className="primary">
        Login Button
     </button>
     <div className=" text-center py-2 text-gray-500"> Don't have an account yet? <Link  className="underline text-black" to={'/register'}>Register Now!</Link></div>
    </form>
  </div>
  </div>

    );
 
}