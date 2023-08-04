 import React, { useContext } from "react";
 import StoreData from "./Store";
 import {useLocation ,useNavigate} from "react-router-dom";
 const EditStudent=()=>{
    const navigate=useNavigate();
    const ContextData=useContext(StoreData);
    const navi=useNavigate()
    const index_value=useLocation().state.data;
    console.log(index_value)
    const updateStu={
        Name:ContextData.stuName[index_value].Name,
        Age:ContextData.stuName[index_value].Age,
        Batch:ContextData.stuName[index_value].Batch,
        Course:ContextData.stuName[index_value].Course
    }
    const handleChange=(event)=>{
   updateStu[event.target.name]=event.target.value;
    }
    const handleClick=()=>{
   ContextData.stuName[index_value]=updateStu;
   navi('/student');
    }
    const handleCancel=()=>{
        navigate('/student')
    }
    return(
        <>
        <h1>
            Edit Student Details 
        </h1>
         <div className="form_box"> 
         <div className="temp">
            <div>
         <label htmlFor="name">Name</label>
            <input type="text" id='name'name='Name' placeholder={ContextData.stuName[index_value].Name} onChange={handleChange}/>
         </div>
         <div>
         <label htmlFor="age">Age</label>
            <input type="number" id='age' name='Age' placeholder={ContextData.stuName[index_value].Age} onChange={handleChange}/>
         </div>
            </div>
           <div className="temp">
            <div>
            <label htmlFor="batch">Course</label>
            <input type="text" id='batch' name='Batch' placeholder={ContextData.stuName[index_value].Batch} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor="course">Batch</label>
            <input type="text" id='course' name='Course' placeholder={ContextData.stuName[index_value].Course} onChange={handleChange}/>
            </div>
           </div>
           <div>
            <button type="button" onClick={handleClick}>update Student</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
            </div>
        </>
    )
 }
 export default EditStudent