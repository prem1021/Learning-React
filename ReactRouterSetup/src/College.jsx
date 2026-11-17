import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'
const College = () => {
    return (
        <div>
            <div className='college' style={{ textAlign: 'center' }}>
                <h1>College</h1>
                <h3><Link to="/">Go Back To Home</Link></h3>
                <NavLink className='link' to=''>Student</NavLink>
                <NavLink className='link' to='department'>Departments</NavLink>
                <NavLink className='link' to='details'>College Details</NavLink>
                <Outlet />
            </div>
        </div>
    )
}

export default College
