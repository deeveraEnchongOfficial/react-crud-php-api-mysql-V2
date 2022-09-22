import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const CreateUser = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/api/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group pb-3">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            name="name" onChange={handleChange}
          />
        </div>
        <div className="form-group pb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email" onChange={handleChange}
          />
        </div>
        <div className="form-group pb-3">
          <label htmlFor="exampleInputEmail1">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Mobile"
            name="mobile" onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/">
            <button type="submit" className="btn btn-primary btn btn-danger col-xs-2 margin-left">
          Cancel
        </button>
        </Link>
        
      </form>
    </div>
  );
};

export default CreateUser;
