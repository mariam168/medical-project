import React from 'react';

import logo from './Assets/logo.png'
import { Link } from 'react-router-dom';
export default function Sign_up() {
  return (
    <div>
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
      </ul>
      <Link to="/Sign_in"><button>SIGN IN</button></Link>
    <Link to="/Sign_up" ><button>SIGN UP</button></Link>
      
    </nav>
    <div className='logo'>
        <img src={logo} alt="Logo" className='logoImage' />
      </div>

      <div className="con">
      <div className='paragraph'>
         <div>Welcome Back</div>
         <div style={{fontSize:"20px"}}>Nice to see you Again</div>
         </div>
        <form style={{position:"relative",top:"20px",height:"400px"}}>
          <h1>SIGN IN</h1>
          <label for="email" >Email</label>
          <input  type="email" id="email"  className='input'  />
          <label for="password">Password</label>
          <input  type="password" id="password" className='input' />
          <input  type="checkbox" className='check' /> <p> remember me</p>
          <Link to="/" ><button className='join'>Sign In</button></Link>
  
          <hr className='hr1'></hr> <p className='or'>OR</p><hr className='hr2'></hr>
          <button className='google' style={{marginBottom:"40px"}}>Sign In with Google</button>
        </form>
        </div>
    
      </div>
  );
}

