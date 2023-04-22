import React from 'react'
import './AdminDashboard.css'

import Dashboard from './Dashboard';
import DashTopBar from './DashTopBar';
import DashLeftBar from './DashLeftBar';

export default function AdminDashboard() {
    return (
        <>
            <DashTopBar/>
            <div class="dash-container">
                <DashLeftBar/>
                <Dashboard/>                 
            </div>

        </>
    )
}
