import { LuClock1 } from "react-icons/lu";
import {React, useState} from 'react';
import { ImCross } from "react-icons/im";
import {  useNavigate } from "react-router-dom"


const Create = () => {
    const [inputValue, setInputValue] = useState('');
    const [noteValue, setNoteValue] = useState('');
    const navigate = useNavigate();

    const handleCrossClick = () => {
        navigate('/home'); 
    };
   return (
        <div className="createbackgroundcolor">
            <div className="exitandcreate">
                <button onClick={handleCrossClick}><ImCross size={30} color="blue" /></button>
                <button
                
                    style={{ backgroundColor: 'blue', borderRadius: '18px', color: 'white' }}
                >
                    create
                </button>
            </div>

            {/* 1st Section: Input */}
            <div className="section center">
                {/* <h2>Input Section</h2> */}
                <input
                    style={{ width: '20rem', height: '2rem', borderBlockColor: 'white' }}
                    type="text"
                    placeholder="Add Title"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            {/* Separator Line */}
            <div className="separator"></div>

            {/* 2nd Section: All Day with Date Boxes */}
            <div className="section center">
                <h2><LuClock1 />All Day</h2>
                <div className="date-box">
                    {/* Date Box 1 */}
                    <input type="date"
                         />
                </div>
                <div >•</div>
                <div >•</div>
                <div >•</div>
                <div className="date-box">
                    {/* Date Box 2 */}
                    <input type="date"
                      
                    />
                </div>
            </div>

            {/* Separator Line */}
            <div className="separator"></div>

            {/* 3rd Section: Add Note */}
            <div className="section center">
                <h2>Add Note</h2>
                <div className="note-input">
                    <input
                        type="text"
                        value={noteValue}
                        onChange={(e) => setNoteValue(e.target.value)}
                    />
                </div>
                <div className="separator"></div>

            </div>
        </div>
    );
};

export default Create;
