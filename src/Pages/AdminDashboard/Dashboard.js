import React from 'react'
import './Dashboard.css'
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <div className='dash-main'>
                <h1>Dashboard</h1>
                <hr />
                <div className='box-container'>

                    <Link to="/admin/hotels">
                        <div className='box'>
                            <h4>Hotels</h4>
                            <h2>10</h2>
                        </div>
                    </Link>
                    <Link to="/admin/restaurants">
                        <div className='box'>
                            <h4>Restaurants</h4>
                            <h2>20</h2>
                        </div>
                    </Link>
                    <Link to="/admin/tour-agency">
                        <div className='box'>
                            <h4>Tour Agencies</h4>
                            <h2>30</h2>
                        </div>
                    </Link>
                    <Link to="/admin/tourist-guide">
                        <div className='box'>
                            <h4>Tourist Guides</h4>
                            <h2>20</h2>
                        </div>
                    </Link>
                    <Link to="/admin/transport">
                    <div className='box'>
                        <h4>Transport</h4>
                        <h2>40</h2>
                    </div>
                    </Link>
                    <Link to="/admin/users">
                    <div className='box'>
                        <h4>Users</h4>
                        <h2>500</h2>
                    </div>
                    </Link>
                </div>
                <h3>Pending Approvals</h3>
                <hr />
            </div>
        </>
    )
}
