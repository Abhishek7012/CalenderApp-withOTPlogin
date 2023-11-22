import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Create from "./Create"


function AllPath()  {
   
    return (
      <BrowserRouter>
        <Routes>
        <Route exact path="/home" element={<Home />} >
          </Route>
        <Route exact path="/" element={<Login />} >
        </Route>
        <Route exact path="/create" element={<Create />} >
        </Route>
        </Routes>
      </BrowserRouter>
  
  );
    }
    
  
  export default AllPath;