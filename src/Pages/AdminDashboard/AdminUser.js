import React from 'react'
import DashTopBar from './DashTopBar'
import DashLeftBar from './DashLeftBar'
import './AdminUser.css'
import adminUserData from './AdminUserData'
import AdminUserCard from './AdminUserCard'


export default function AdminUser() {
  return (
     <>
    <DashTopBar/>

    <div className="dashuser-container">
        <DashLeftBar/>

        <div className="admin-user">
            <h1>Users</h1>
            <hr />
            <div>
    {
              adminUserData.map((adminUserData) => {
                return (<AdminUserCard key={adminUserData.id} adminUserData={adminUserData} />)
              })
}
    </div>

        </div>
    </div>
     </>
  )
}
