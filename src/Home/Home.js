import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiFilter, CiServer } from "react-icons/ci";
import { TbMinusVertical } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import { LuClock1 } from "react-icons/lu";
import { useNavigate } from "react-router-dom"
import './Home.css';
import { useTaskContext } from '../TaskContext';


const Home = () => {
  const navigate = useNavigate();
  const { tasks } = useTaskContext();

  const handleEditbutton = () => {
    navigate('/create');
  };

  const handleLogout = () => {
    navigate('/');
  };


  return (
    <div className="home">
      <nav className="navbar">
        <div>
          <CiFilter size={40} />
        </div>
        <div className="navbarmiddle">Home</div>
        <div>
          <IoIosNotificationsOutline size={40} />
          <CiServer size={40} />
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="taskcontainer">
        <div className="upcoming">
          <TbMinusVertical size={40} />Upcoming Tasks
        </div>
        {tasks.map((task, index) => (
          <div className="dateAndTitle" key={index}>
            <div className="task-date">{task.date}</div>
            <div className="container">
              <div className="title">{task.title}</div>
              <div className="number">
                <RiUserLine />
                {task.numberOfParticipants}
              </div>
              <div className="time">
                <LuClock1 /> {task.time}
              </div>
            </div>
          </div>
        ))}
        <div className="floating-button">
          <button onClick={handleEditbutton}>
            <FaPlus size={45} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

