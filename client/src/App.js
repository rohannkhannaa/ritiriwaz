import { useEffect, useContext, useState} from "react";
import {BrowserRouter,Routes,Route,useNavigate} from "react-router-dom";

import LoginPage from "./components/LoginPage";
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:4000";

function Root() {
  return (
    <div>
    <Routes> 
       <Route path="/" element={<><LoginPage/></>} />
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