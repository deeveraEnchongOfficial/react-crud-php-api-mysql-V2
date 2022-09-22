import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/api/user/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost/api/user/${id}/edit`, inputs).then(function(response){
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
            value={inputs.name}
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group pb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={inputs.email}
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group pb-3">
          <label htmlFor="exampleInputEmail1">Mobile Number</label>
          <input
            value={inputs.mobile}
            type="text"
            className="form-control"
            name="mobile"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/">
          <button
            type="submit"
            className="btn btn-primary btn btn-danger col-xs-2 margin-left"
          >
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default EditUser;
