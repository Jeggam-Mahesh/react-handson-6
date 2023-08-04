import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './Home';
import Contact from './Contact'
import Student from './Student'
import StoreData from "./Store";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import AddNewStudent from "./AddNewStudent";
import EditStudent from './EditStudent'
import './styles.css'

const RouteComp=()=>{
    const [studentData,setstudentData]=useState(
        [
          {
            Name:"mahesh",Age:23,Course:"mern",Batch:"EA23",Change:'edit'
          },
          { 
            Name:"Ajay",Age:23,Course:"mern",Batch:"EA23",Change:'edit'
          },
          {
            Name:"umesh",Age:23,Course:"mern",Batch:"EA23",Change:'edit'
          },
          {
            Name:"venkat",Age:23,Course:"mern",Batch:"EA23",Change:'edit'
          },
          {
            Name:"mahesh",Age:23,Course:"mern",Batch:"EA23",Change:'edit'
          },
        ]
    )
    return(
        <div>
         <BrowserRouter>
         <div id="parent">
         <NavLink className='Link' to='/'>Home</NavLink>
         <NavLink className='Link' to='/student'>Student</NavLink>
         <NavLink className='Link' to='/contact'>Contact</NavLink>
         
         </div> 
         
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/student' element={
                <StoreData.Provider value={{stuName:studentData,updateStu:setstudentData}}>
                    <Student/>
                </StoreData.Provider>
            }/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/addnewStudent' element={
              <StoreData.Provider value={{stuName:studentData,updateStu:setstudentData}}>
              <AddNewStudent/>
          </StoreData.Provider>
            }/>
            <Route path='/editstudent' element={
               <StoreData.Provider value={{stuName:studentData,updateStu:setstudentData}}>
               <EditStudent/>
           </StoreData.Provider>
            }/>
         </Routes>
         </BrowserRouter>
        </div>
    )
}
export default RouteComp