import React, { useContext } from "react";
import StoreData from "./Store";
import { useNavigate } from "react-router-dom";
const AddNewStudent=()=>{
    const nav=useNavigate();
    const navigate=useNavigate();
    const ContextData=useContext(StoreData);
    const newStu={
        Name:'',
        Age:'',
        Batch:'',
        Course:''

    }
    console.log(ContextData);
    const handleChange=(e)=>{
        console.log("hi")
        newStu[e.target.name]=e.target.value

    }
    const handleClick=()=>{
     ContextData.stuName.push(newStu);
     nav('/student')
    }
    const handleCancel=()=>{
        navigate('/student')
    }
    return(
        <>
        <div>
            <h1>
                Add New Student
            </h1>
            
            <div className="form_box"> 
            <div className="temp">
                <div>
                <label htmlFor="name">Name</label>
            <input type="text" id='name'name='Name' placeholder="enter name" onChange={handleChange}/>
                </div>
            <div>
            <label htmlFor="age">Age</label>
            <input type="number" id='age' name='Age' placeholder="enter age" onChange={handleChange}/>
            </div>
           
            </div>
           <div className="temp">
            <div>
            <label htmlFor="course">Batch</label>
            <input type="text" id='course' name='Course' placeholder="enter course" onChange={handleChange}/>
            </div>
          
           <div>
           <label htmlFor="batch">Course</label>
            <input type="text" id='batch' name='Batch' placeholder="enter batch" onChange={handleChange}/>
           </div>
           
            </div>
            <div>
            <button type="button" onClick={handleClick}>Add Student</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
            </div>
        </div>
        </>
    )
}
export default AddNewStudent