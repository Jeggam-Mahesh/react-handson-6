import React from "react";
import StoreData from "./Store";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './styles.css'
const Student=()=>{
    const ContextData=useContext(StoreData);
    const nav=useNavigate();
    console.log(ContextData);
    return(
        <div className="student">
        <div id='firstLine'>
      <h1>Student Details</h1>
      <h1><button id='add' onClick={()=>nav('/addnewStudent')

      }>Add New Student</button></h1>
      </div>
       <table border={1}>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
        </tr>
        {
        ContextData.stuName.map((item,index)=>{
            return (
             <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td ><Link state={{data:index}} to='/editstudent'>edit</Link></td>
                 
             </tr>   
            )
        })
        }
       </table>
        </div>
    )
}
export default Student