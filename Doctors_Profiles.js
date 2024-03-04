import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import defaultProfileImage from './Assets/profile2.jpg';
import home_icon from './Assets/home_icon.png';
import dashboard_icon from './Assets/dashboard_icon.png';
import mammograph_icon from './Assets/mammograph_icon.png';
import pathology_icon from './Assets/pathology_icon.png';
import patient_icon from './Assets/patient_icon.png';
import doctor_icon from './Assets/doctor_icon.png';
import phone_icon from './Assets/phone_icon.png';
import email_icon from './Assets/email_icon.png';
import address_icon from './Assets/address_icon.png';
import ID_icon from './Assets/ID_icon.jpg'
export default function DoctorProfile() {
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        address: '',
        id: '',
        name:'',
        experience:"",
        education:"",
    });

    const [profileImage, setProfileImage] = useState(defaultProfileImage);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setProfileImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const saveProfile = () => {
        console.log(formData);
        console.log(profileImage);
    };

    return (
        <div className="doctorProfile">
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

            <div className="main-content">
                <form className='DoctorInformation'>
                    <div className="section">
                        <div className='profileImage'>
                           
                            <img src={profileImage} alt="Profile Preview" className='profilepreview' />
                            <input
                                className='profileInput'
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                onChange={handleImageChange}
                            />
                        </div>
                        <h2>Contact Details</h2>
                       <ul className='contact_details'>
                      <li> 
                        <img src={phone_icon} alt='phone'></img>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        </li>
                        
                        <li>
                            <img src={email_icon}></img><input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        </li>
                        <li>
                        <img src={address_icon} alt='address'></img>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                       </li>
                       <li>
                        <img src={ID_icon} alt="ID"></img>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            required
                        />
                        </li>
                        </ul>
                    </div>
                    <div className='edu_exp'>
                        <div className='doctor_name'>
                        <h1>Doctor's Name</h1>
                            
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <div className='experience'>
                            <h3>Experience</h3>
                              <textarea
                                type="text"
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                required
                              />
                        </div>
                        <div className='education'>
                            <h3>Education</h3>
                            <textarea
                                type="text"
                                id="education"
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                                required
                              />
                        </div>

                    </div>
                </form>
            
            </div>
        </div>
    );
}