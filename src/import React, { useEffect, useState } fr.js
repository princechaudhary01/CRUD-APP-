import React, { useEffect, useState } from "react";
import List from "./List";
import { useNavigate } from "react-router-dom";

function Form() {
  const formValue = {
    name: "",
    email: "",
    gender: "",
    dob: ""
  };
  const [formData, setFormData] = useState(formValue);
  const[Error , setError] = useState(formValue);
  const [store , setStore ] = useState([])
  const navigate = useNavigate();

  useEffect(() =>{
    localStorage.setItem('store', JSON.stringify(store));
  },[store]);

  //create a Funcation for assign value ;
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
    //create a Funcation for forms name handlesubmit;
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(formData.name && formData.email && formData.gender && formData.dob){
       let data= [...store , {id: new Date().getTime().toString() , name : formData}]
      // localStorage.setItem('store', JSON.stringify(data));
      setStore(data);
      console.log('check', data);
      setFormData(formValue);
        setError({});
        navigate('/List');
    } else{
      let error = {}
      // console.log(!formData.name &&  !formData.email && !formData.gender , !formData.dob);
        // if(!formData.name ||  !formData.email || !formData.gender || !formData.dob)
        // {
          // console.log("2" , !formData.name &&  !formData.email && !formData.gender && !formData.dob);
          !formData.name && (error.name = "name is mandatory");
          !formData.email &&( error.email = "email is mandatory");
          !formData.gender && (error.gender = "please choose gender");
          !formData.dob &&( error.dob = "please choose date of birth");
        // }
         
        setError(error);
    } 
    
    }
  return (
    //form field = Name , Email address , gender , Date of Birth;
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
    <div className="d-flex justify-content-center ">
      <form onSubmit={handleSubmit }>
        <div className="form-group">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="name"
            name="name"
            value={formData.name}
            onChange={inputEvent}
            className="form-control"
            id="name"
            aria-describedby="name"
          />
         <span className="text-danger">{Error.name}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="form-control"
            id="exampleInputEmail1"
            onChange={inputEvent}
            aria-describedby="emailHelp"
          />
          <span className="text-danger">{Error.email}</span>
        </div>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Gender
        </label>
        <select
          className="form-select"
          name="gender"
          value={formData.gender}
          onChange={inputEvent}
          aria-label="Default select example"
        >
          <option selected>Open this select menu</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        
        <span className="text-danger">{Error.gender}</span>
        <div className="col-12">
          <label htmlFor="date" className="sm-1 col-form-label">
            Date of birth
          </label>
          <div className="input-group date" id="datepicker">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={inputEvent}
              className="form-control"
            />
            <br/>
            <span className="text-danger">{Error.dob}</span>
          </div>
        </div>
        <br />
        <button type="submit"  className="btn btn-outline-primary">
        
          Submit
        </button>
        <button type="button" onClick={() =>navigate('/List')} className="btn btn-outline-primary">list</button>
      </form>
    </div>
    </div>
  );
}

export default Form;
