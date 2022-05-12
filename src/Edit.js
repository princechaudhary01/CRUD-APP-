import React from 'react';
import { useNavigate } from "react-router-dom";


function Edit({formData, setFormData, updateVal}) {

  const navigate = useNavigate(useNavigate);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name] : value});
  }

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <div className="d-flex justify-content-center ">
      <form onSubmit={updateVal}>
      <div className="form-group">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="name"
              name="name"
              value={formData.name}
              onChange={handleInput}
              className="form-control"
              id="name"
              aria-describedby="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              className="form-control"
              id="exampleInputEmail1"
              
              aria-describedby="emailHelp"
            />
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            name="gender"
            value={formData.gender}
            onChange={handleInput}
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <div className="col-12">
            <label htmlFor="date" className="sm-1 col-form-label">
              Date of birth
            </label>
            <div className="input-group date" id="datepicker">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInput}
                className="form-control"
              />
            </div>
            <br/>
            <button type="submit" className="btn btn-outline-primary"> Update </button>
            <button
            type="button"
            onClick={() => navigate("/List")}
            className="btn btn-outline-primary m-2">list</button>
          </div>
      </form>
      </div></div>
  )
}

export default Edit;