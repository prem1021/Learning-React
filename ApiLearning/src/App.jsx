import React from 'react'
import "./App.css"
import { useEffect, useState } from "react"
const App = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getUserData();
    }, [])
    async function getUserData() {
        const url = "https://dummyjson.com/products"
        let response = await fetch(url);
        response = await response.json();
        setUserData(response.products);
    }

    console.log(userData);
    return (
        <div>
            <h1>Fetch Data from API</h1>
            <ul className='user-list user-list-head'>
                <li>Price</li>
                <li>Rating</li>
                <li>Stock</li>
            </ul>
            {
                userData && userData.map((user) => (

                    <ul className='user-list'>
                        <li>{user.price}</li>
                        <li>{user.rating}</li>
                        <li>{user.stock}</li>
                    </ul>

                ))
            }
        </div>
    )
}

export default App
