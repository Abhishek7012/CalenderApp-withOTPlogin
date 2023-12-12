import { LuClock1 } from "react-icons/lu";
import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Create = () => {
    const [inputValue, setInputValue] = useState('');
    const [noteValue, setNoteValue] = useState('');
    const navigate = useNavigate();

    const handleCrossClick = () => {
        navigate('/home');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
                <div className="col-2">
                    <button className="btn" onClick={handleCrossClick}><ImCross size={30} color="blue" /></button>
                </div>
                <div className="col-2">
                    <button
                        className="btn btn-primary"
                        style={{ borderRadius: '18px' }}
                    >
                        Create
                    </button>
                </div>
            </div>

            {/* 1st Section: Input */}
            <div className="section center mt-4">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Add Title"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            {/* Separator Line */}
            <div className="separator mt-4"></div>

            {/* 2nd Section: All Day with Date Boxes */}
            <div className="section center mt-4">
                <h2><LuClock1 /> All Day</h2>
                <div className="row">
                    {/* Date Box 1 */}
                    <div className="col">
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col">
                        {/* Date Box 2 */}
                        <input type="date" className="form-control" />
                    </div>
                </div>
            </div>

            {/* Separator Line */}
            <div className="separator mt-4"></div>

            {/* 3rd Section: Add Note */}
            <div className="section center mt-4">
                <h2>Add Note</h2>
                <div className="note-input">
                    <input
                        className="form-control"
                        type="text"
                        value={noteValue}
                        onChange={(e) => setNoteValue(e.target.value)}
                    />
                </div>
                <div className="separator mt-4"></div>
            </div>
        </div>
    );
};

export default Create;

