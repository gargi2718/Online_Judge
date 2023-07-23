import logo from './logo.svg';
/*import './App.css'*/
import {Route,Routes} from "react-router-dom"
import IndexPage from "./pages/IndexPage.js"
import LoginPage from "./pages/LoginPage.js"
import RegisterPage from "./pages/RegisterPage.js"
import Layout from './Layout.js';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  return (    
  <Routes>
  <Route path="/" element={<Layout/>}>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
   </Route>
 </Routes>
    
 
   
  );
  
}



export default App;


/*
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
  /*
 
<main>
        <div className="entry">
           <h2><a href=""> Google Interview Experience: 2023</a> </h2>
           <p className="info"> <a className="author"> Author:Anon  </a>
            </p>
         <p>Phone Interview: <br></br>
There is a grasshopper that starts from the root node, if the hopper hops to a node with no children the hopper is stuck and can't move further. If the grasshopper has the option to move then it has to make the hop. Basically the goal is to find the probability of the grasshopper landing at each node.
</p>
        </div>
      <div className="entry">
        <h2><a href="">Round #345 (Div 2)</a> </h2>
        <p>I invite everyone to participate in Codeforces Round 884 (Div. 1 + Div. 2), which will start on Tuesday, July 11, 2023 at 20:05UTC+5.5. The round is a combined round and will be rated for everyone.

You will be given 8 problems and 3 hours to solve them. One of the problems is divided into two subtasks. The scoring distribution will be:
<br></br>
500— 1000 — 1250 — 1500— 2000 — (2000+1000) — 3500 — 4000
</p>
      </div>
     
      </main>  
*/