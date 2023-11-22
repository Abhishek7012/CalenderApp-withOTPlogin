import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiFilter, CiServer } from "react-icons/ci";
import { TbMinusVertical } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import { LuClock1 } from "react-icons/lu";
import { useNavigate } from "react-router-dom"




const Home = () => {
    const navigate = useNavigate();
    const handleEditbutton = () => {
        navigate('/create'); 
    };
       return (
        <div className="home">
            <nav className="navbar">
                <div >
                    <CiFilter size={40} />
                </div>
                <div className="navbarmiddle">Home</div>
                <div >
                    <IoIosNotificationsOutline size={40} />
                    <CiServer size={40} />
                </div>
            </nav>
            <div className='taskcontainer'>
            <div className="upcoming"> <TbMinusVertical size={40} />Upcoming</div>
            <div className='dateAndTitle'>
                <div >22 feb</div>
                <div className="container">
                    <div className="title">Family Night Plan</div>
                    <div className="number"><RiUserLine/>2</div>
                    <div className="time"><LuClock1/> 9:00 - 11:30 P.M.</div>
                </div>
            </div>
            <div className='dateAndTitle'>
            <div >23 Mar</div>
              <div className="container2">
                    <div className="title">Meeting For Business</div>
                    <div className="number"><RiUserLine/>3</div>
                    <div className="time"><LuClock1/> 7:36 - 8:30 P.M.</div>
                </div>
            <div class="floating-button">
    <button onClick={handleEditbutton}><FaPlus size={45}/></button>
  </div>
            </div>
            </div>
        </div>
    );
}

export default Home;

