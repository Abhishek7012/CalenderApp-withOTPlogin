import { LuClock1 } from "react-icons/lu";
import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTaskContext } from '../TaskContext';
import './create.css';

const Create = () => {
    const [inputValue, setInputValue] = useState('');
    const [participants, setParticipants] = useState('');
    const [startDate, setStartDate] = useState(''); 
    const [endDate, setEndDate] = useState('');
    const navigate = useNavigate();
    const { addTask } = useTaskContext();
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleCrossClick = () => {
        navigate('/home');
    };
    const handleCreateClick = () => {
        const newTask = {
            title: inputValue,
            date: `${startDate} - ${endDate}`,
            numberOfParticipants: participants,  
            time: `${startTime} - ${endTime}`,
        };

        addTask(newTask);  
        navigate('/home');
    };

    return (
        <div className="create-container">
            <div className="header">
                <button className="icon-button" onClick={handleCrossClick}>
                    <ImCross size={30} />
                </button>
                <button className="create-button" onClick={handleCreateClick}>
                    Create
                </button>
            </div>

            <div className="input-section">
                <input
                    className="title-input"
                    type="text"
                    placeholder="Add Title"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            <div className="date-section">
                <h2><LuClock1 /> All Day</h2>
                <div className="date-inputs">
                    <input
                        type="date"
                        className="date-input"
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <input
                        type="date"
                        className="date-input"
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>
            <div className="note-section">
                <h2> Number of Participants</h2>
                <input
                    className="note-input"
                    type="number"
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                />
            </div>
            <div className="time-section">
            <h2>Time</h2>
            <div className="time-inputs">
                <input
                    type="time"
                    className="time-input"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
                <span>to</span>
                <input
                    type="time"
                    className="time-input"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
            </div>
        </div>
        </div>
    );
};

export default Create;

