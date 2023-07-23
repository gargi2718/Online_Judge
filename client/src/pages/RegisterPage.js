import { Link } from "react-router-dom";
import React, {useState} from "react";
import axios from "axios"
export default function RegisterPage(){
    
    
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  async function RegisterUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });
      alert('Registration successful. Now you can log in');
    } catch (e) {
      alert('Registration failed. Please try again later');
    }
  }
        
    
    return(
 <div className="mt-8 grow flex items-center justify-around font-mono" >
  <div className="mb-64">
    <h1 className="text-4xl text-center mb-4 font-mono">Register</h1>
    <form className="max-w-md mx-auto" onSubmit={RegisterUser}>
        <input type="text" placeholder="Colin Gabel" 
            value={name} 
            onChange={ev => setName(ev.target.value)}/>
        <input type="email" placeholder="type@email.com" 
            value={email} 
            onChange={ev => setEmail(ev.target.value)}/>
        <input type="password" placeholder="password" 
            value={password} 
            onChange={ev => setPassword(ev.target.value)}/>
        <button className="primary">
        Register Button
     </button>
     <div className=" text-center py-2 text-gray-500"> Already a member? <Link  className="underline text-black" to={'/login'}>Login!</Link></div>
    </form>
  </div>
  </div>

    );
 
}