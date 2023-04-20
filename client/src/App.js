import React, { Component }  from 'react';

import { useEffect, useContext, useState} from "react";
import {BrowserRouter,Routes,Route,useNavigate} from "react-router-dom";
import Dashboard from './components/Dashboard'
import LoginPage from "./components/LoginPage";
import axios from 'axios';
import WelcomePage from './components/welcomePage';

function Root() {
  return (
    <div>
    <Routes> 
       <Route path="/" element={<><WelcomePage/></>} />
       <Route path="/dashboard" element={<><Dashboard/></>} />
      </Routes>
      </div>
  );
}


export default function App() {

  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );

}