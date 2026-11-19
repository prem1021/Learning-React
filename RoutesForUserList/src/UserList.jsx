import React, { useEffect, useState } from 'react'
import "./App.css"
import { useNavigate } from "react-router";
const UserList = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        getUserData();
    }, []);

    //GET Method
    const getUserData = async () => {
        const url = "http://localhost:3000/users"
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUserData(response);
        setLoading(false);
    }

    //Delete Method
    const deleteUser = async (id) => {
        const url = "http://localhost:3000/users";
        let response = await fetch(url + "/" + id, {
            method: 'delete'
        })
        response = await response.json();
        if (response) {
            alert("User deleted");
            getUserData() //this line to automatically refresh the page with new data
        }
    }

    //Edit (PUT) method
    const editUser = (id) => {
        navigate("/edit/" + id)
    }

    return (
        <div>
            <h1>Make Routes and Pages For Add USer and user List UI</h1>
            <ul className="user-list user-list-head">
                <li>Name</li>
                <li>Age</li>
                <li>Email</li>
                <li>Action</li>
            </ul>
            {
                !loading ?
                    userData.map((user) => (
                        <ul key={user.name} className='user-list'>
                            <li>{user.name}</li>
                            <li>{user.age}</li>
                            <li>{user.email}</li>
                            <li>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                                <button onClick={() => editUser(user.id)}>Edit</button>
                            </li>
                        </ul>
                    ))
                    : <h1>Data Loading ...</h1>
            }
        </div>
    )
}

export default UserList
