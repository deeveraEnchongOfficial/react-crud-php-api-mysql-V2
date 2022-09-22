import axios from "axios"
import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListUser = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/api/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    const deleteUser = (id) => {
        axios.delete(`http://localhost/api/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

  return (
    <div>
        <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {users.map((user, key) =>
                  <tr key={key}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>
                    <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>
                      <button type="button" className="btn btn-info btn-sm col-xs-2 margin-left">Edit</button>
                    </Link>
                      <button type="button" onClick={() => deleteUser(user.id)} className="btn btn-danger btn-sm col-xs-2 margin-left">Delete</button>
                    </td>
                  </tr>
                  )}
                </tbody>
              </table>
    </div>
  )
}

export default ListUser