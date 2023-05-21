import React from 'react'
import './UserInfo.css'

export default function UserInfo() {
    return (
        <>
        
            <div className='user-info-main'>
                <h1 className='user-info-head'>
                    <span>User </span>
                    <span>Information</span>
                </h1>
                <p className='text-center'>Please fill the form given below to complete your signup process.</p>
                <form className='user-info-form'>
 
                    <div class="mb-3">
                        <label for="cnic" class="form-label">CNIC No.</label>
                        <input type="number" class="form-control" id="cnic" required />
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="tel" class="form-control" id="phone" required />
                    </div>
                   
                    <div class="mb-3">
                        <label for="city" class="form-label">City</label>
                        <input type="text" class="form-control" id="city" required />
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Adress</label>
                        <input type="text" class="form-control" id="address" required />
                    </div>
                       

                    <button type="submi" class="btn btn-primary sbmt">Submit</button>
                </form>

            </div>

        </>
    )
}
