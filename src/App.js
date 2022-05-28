import React from "react";
import { Route,Routes } from "react-router-dom";
import SingleRobot from './singleRobot'
import Home from './HomePage'

const Router = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/robot/:id" element={<SingleRobot/>} />
    </Routes>
  )
}

export default Router