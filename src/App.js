import React from "react";
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Details from './component/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>    
       <Routes>
       <Route exact path='/' element={<Login />} />
       <Route exact path='/signup' element={<SignUp />} />
       <Route exact path='/dashboard' element={<Dashboard/>}/>
       <Route exact path="/productDetails" element={<Details />} />
     </Routes>
    </BrowserRouter>
  );
};

export default App;
