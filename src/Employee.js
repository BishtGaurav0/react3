import React, { useState} from "react";
import "./Employee.css";

function Employee() {
  const[name,setName]=useState("");
  const[dept,setDept]=useState("");
  const[rank,setRank]=useState("");
  const[list,setList]=useState([]);
  const[content,setContent]=useState(true);

  const Submit=(e)=>{
    e.preventDefault();
    const data={name,dept,rank}
    if(name&&dept&&rank){
      setList((lists)=>[...lists,data])
      setName("")
      setDept("")
      setRank("")
      setContent(false)
    }
  }

  return (
    <div className="employee">
        { content ?
           <>
            <div className="heading">EMPLOYEE FEEDBACK FORM</div>
            <form action="" onSubmit={Submit}>
                <div>
                    <label htmlFor='name' className='title'>Name:</label>
                    <input type="text" name='name' id='name' className='Border' value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
                    <label htmlFor='dept' className='title'>Department:</label>
                    <input type="text" name='dept' id='dept' className='Border' value={dept} onChange={(e)=>setDept(e.target.value)}/><br></br>
                    <label htmlFor='rating' className='title'>Rating:</label>
                    <input type="number" name='rating' id='rating' className='Border' value={rank} onChange={(e)=>setRank(e.target.value)}/><br></br>
                </div>
                <button type='submit' className='button'>Submit</button> 
            </form>
            </>:
            <>
            <h1> EMPLOYEE FEEDBACK FORM</h1>
        <div className="Display">
          
          {
            list.map((a)=>
            <div className="record">
            
            <h2>Name: {a.name} | Department: {a.dept} | Rating: {a.rank}</h2>
            
            </div>)
          }
          </div>
           <button className="button" onClick={()=>setContent(true)}>Go back</button>
          </>
       }
      </div>
    
  );
}

export default Employee;
