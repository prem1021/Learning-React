import React from 'react'
import Student from './Student'
const College = ({ college }) => {
    return (
        <div style={{
            backgroundColor: "acc",
            padding: '20px',
            borderBottom: '5px solid black',
            borderRadius: '20px'
        }}>
            <h1>Name: {college.name}</h1>
            <ul>
                <li>
                    <h3>City: {college.city}</h3>
                </li>
                <li>
                    <h3>Website: {college.website}</h3>
                </li>
                <li>
                    <Student student={college.student} />
                </li>
            </ul>
        </div>
    )
}

export default College
