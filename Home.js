import React from 'react';
import  { useState, useEffect } from 'react'
import mammograph from './Assets/mammograph.png' ;
import pathology from './Assets/pathology.png';
import home1 from './Assets/home1.jpg';
import home2 from './Assets/home2.jpg';
import home3 from './Assets/home3.jpg';
import Data from './Data';
import dashboard from './Assets/dashboard.png'
import doctor1 from './Assets/doctor1.jpg';
import doctor2 from './Assets/doctor2.jpg';
import doctor3 from './Assets/doctor3.jpg';
import doctor4 from './Assets/doctor4.jpg';
import patients from './Assets/patients.png'
import logo from './Assets/logo.png';
import { Link } from 'react-router-dom';
export default function Home() {
  const p1 ="Providing Best Medical Care";
  const p2 ="Your Trusted Resource for Breast Cancer Information ";
  const p3 = "Delivering Optimal Healthcare solution";
  const [index, setIndex] = useState(0);
  const [p_index,setPindex] = useState(0);
  const images = [home1, home2, home3];
  const paragraphs = [p1,p2,p3];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  useEffect(() => {
    const interval = setInterval(() => {
      setPindex(prevIndex => (prevIndex + 1) % paragraphs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paragraphs.length]);
  
  return ( 
    <><nav >
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/about">ABOUT US</Link></li>
      <li><Link to="/contact">CONTACT US</Link></li>
    </ul>
    <Link to="/Sign_in"><button>SIGN IN</button></Link>
    <Link to="/Sign_up"><button>SIGN UP</button></Link>
    
  </nav>
  <div className='logo'>
      <img src={logo} alt="Logo" className='logoImage' />
    </div>
    <div className={`home ${index === 0 ? 'home-transition' : ''}`}>
    <div className='home'><img src={images[index]} alt="home" /><p className='h_paragraph'>{paragraphs[p_index]}</p><br></br><p className='h_s_paragraph'>Empowering Women's Health</p></div>
    </div>
    <p className='model_paragraph'>Comprehensive Health Care Solution<br></br>For Our Valuable Patients</p>
    
    <div className='model'>
     <Link to="/mammograph">
        <div className='mammograph'><h2>Mammograph <br></br>analysis</h2>
        <img src={mammograph} alt="mammograph" className='mammo'></img>
        <p>Precise Mammogram Analysis Elevate your breast health with our specialized
             model delivering accurate and detailed insights."</p></div></Link>
             <Link to="/pathology"> <div className='pathology'><h2>Pathology <br></br>analysis</h2>
        <img src={pathology} alt="pathology"></img><p>Precision Pathology Unveil in-depth health details 
            through our advanced analysis, ensuring thorough and accurate insights for informed healthcare 
            decisions</p></div></Link>
    </div>
    <div className='dashboard'>
  <h2>Get Access To dashboard</h2>
  <p>Our Statistics Dashboard offers a swift and straightforward method<br></br>
     to access and comprehend key metrics, providing a comprehensive<br></br>
     system overview for efficient monitoring and analysis.</p>
     <img src={dashboard} alt="dashboard" />
  <Link to="/Dashboard">
     <button>Click Here</button>
  </Link>
</div>
<h2 className='doctors_section'>Get Access To Our Specialized Doctors</h2>
<div className='doctors'>
  {Data.slice(0, 4).map((user) => (
    <div key={user.id}>
      <img src={user.image} alt={`doctor${user.id}`} />
      <p>Dr: {user.name}</p>
    </div>
  ))}
</div>
     
     <div className='show'>
      <div className='hor1'></div>
     <div className='ver1'></div>
     <Link to="Doctors"><button>Show all</button></Link>
     <div className='ver2'></div><div className='hor2'></div></div>
     <div className='patients'>
  <h2>Get Access To All Patients</h2>
  <p>
    The advancement of technology and health information systems
    <br></br> allows for efficient and secure access to patient data in hospitals
  </p>
  <img src={patients} alt='patients' />
  <Link to="/Patients">
    <button>Click here</button>
  </Link>
</div>

     <div className='footer'>
     <img src={logo} alt='logo'></img>
      <p>© 2024 Your Website. All rights reserved.</p>
      
    </div>
   
     </>

  );
  
}