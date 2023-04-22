import React from 'react'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <>
    <div className='dash-main'>
        <h1>Dashboard</h1>
        <hr />
        <div className='box-container'>
            <div className='box'>
                <h2>Hotels</h2>
                <h2>10</h2>
            </div>
            <div className='box'>
                <h2>Restaurants</h2>
                <h2>20</h2>
            </div>
            <div className='box'>
                <h2>Tour Agencies</h2>
                <h2>30</h2>
            </div>
            <div className='box'>
                <h2>Tourist Guides</h2>
                <h2>20</h2>
            </div>
            <div className='box'>
                <h2>Transport</h2>
                <h2>40</h2>
            </div>
            <div className='box'>
                <h2>Users</h2>
                <h2>500</h2>
            </div>
        </div>
        <h3>Pending Approvals</h3>
        <hr />
    </div>
    </>
  )
}
