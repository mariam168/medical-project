import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from './Assets/logo.png';
import home_icon from './Assets/home_icon.png';
import dashboard_icon from './Assets/dashboard_icon.png';
import mammograph_icon from './Assets/mammograph_icon.png';
import pathology_icon from './Assets/pathology_icon.png';
import patient_icon from './Assets/patient_icon.png';
import doctor_icon from './Assets/doctor_icon.png';
import profile2 from './Assets/profile2.jpg'
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div className="profiles"> 
       <aside className="aside_nav">
         <ul> 
           <li><Link to="/"><img src={home_icon}></img>Home</Link></li>
           <li><Link to="/Dashboard"><img src={dashboard_icon}></img>Dashboard</Link></li>
           <li><Link to="/Patients"><img src={patient_icon}></img>Patients</Link></li>
           <li><Link to="/Doctors"><img src={doctor_icon}></img>Doctors</Link></li>
           <li><Link to="/mammograph"><img src={mammograph_icon}></img>Mammograph</Link></li>
           <li><Link to="/pathology"><img src={pathology_icon}></img>Pathology</Link></li>
        </ul> 
       </aside>
       <div className="profiles_content">
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}/>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <p >{user.name}</p>
            <img src={user.image || profile2} alt="image"></img>
            <button>View Profile</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>

  );
};

export default Users;
