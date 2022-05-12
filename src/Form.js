import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import default1 from "./images/default1.jpg";

function Form({ data, setAllData, setFormData, formData, setEnb }) {
  const navigate = useNavigate(useNavigate);
  const [Error, setError] = useState(formData);
  const [button, setButton] = useState(false);
  const [uImg, setUImg] = useState(default1);
  // const Defaultimg = {default1};

  //create a Funcation for assign value ;
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputEventFile = (e) => {
    const file = e.target.files[0];
    let imageUrl = URL.createObjectURL(file);
    setUImg(imageUrl);
    setFormData({ ...formData, img:imageUrl});
  };
  

  //create a Funcation for forms name handlesubmit;
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, gender, dob, img } = formData;
    setError(validate(formData));
    setButton(true);
    if (name && email && gender && dob && img) {
      const newData = { ...formData, id: new Date().getTime().toString() };
      setAllData([...data, newData]);
      setFormData({ name: "", email: "", gender: "", dob: "", img: "" });
      setEnb(false);
    }
  };

  useEffect(() => {
    if (Object.keys(Error).length === 0 && button) {
    }
  }, []);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid format!";
    }
    if (!values.gender) {
      errors.gender = "Gender is required!";
    }
    if (!values.dob) {
      errors.dob = "Dob is required!";
    }
    if (!values.img) {
      errors.img = "Image is required!";
    }
    return errors;
  };

 
  return (
    //form field = Name , Email address , gender , Date of Birth;
    <div className=" d-flex justify-content-evenly container content mt-4 shadow-lg p-3 mb-5 bg-white rounded">
      <div className="d-flex justify-content-center ">
        <form onSubmit={handleSubmit}>
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
            <option value="">Open this select menu</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <span className="text-danger">{Error.gender}</span>
          <div className="col-12">
            <label htmlFor="date" className="sm-1 col-form-label">
              Date of birth
            </label>
            <div className="" id="datepicker">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={inputEvent}
                className="form-control"
              />
              <br />
              <span className="text-danger">{Error.dob}</span>
            </div >
            
          </div>
          <br />
            <input
              type="file"
              // value={formData.img}
              id="img"
              name="img"
              accept="image/*"
              onChange={inputEventFile}
              className="form-control"
            />
          <span className="text-danger">{Error.img}</span>
          <br />
          <button
            type="submit"
            // onMouseOver={() => {
            //   console.log("hello");
            // }}
            className="btn btn-outline-primary m-2"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate("/List")}
            className="btn btn-outline-primary m-2"
          >
            list
          </button>
        </form>
      </div>
      <div className="">
      <div  className="mb-3">
            <label className="form-level" for="img">Select image:</label><br/>
            <img src={uImg}
            alt="profile_pic"
            className="img-thumbnail"
            height={150}
            width={150}/>
            </div>
      
      </div>
    </div>
  );
}

export default Form;
