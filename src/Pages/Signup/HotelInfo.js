import React from 'react'
import './UserInfo.css'
import './HotelInfo.css'

export default function HotelInfo() {

    function addAmenities() {
        var container = document.getElementById("addDynamic");
        var input = document.createElement("input");
        input.type = "text";
        input.className='form-control my-2';
        container.appendChild(input);
    }

    function addFeatures() {
        var featureContainer = document.getElementById("addFeatures");
        var input = document.createElement("input");
        input.type = "text";
        input.className='form-control my-2';
        featureContainer.appendChild(input);
    }
    
    function addTypes() {
        var typeContainer = document.getElementById("addTypes");
        var input = document.createElement("input");
        input.type = "text";
        input.className='form-control my-2';
        typeContainer.appendChild(input);
    }

    return (
        <>
        
            <div className='user-info-main'>
                <h1 className='user-info-head'>
                    <span>Hotel </span>
                    <span>Information</span>
                </h1>
                <p className='text-center'>Please fill the form given below to complete your signup process.</p>
                <form className='user-info-form'>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name"  required/>
                    </div> 
                    
                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" required />
                    </div>
                    <div className="mb-3">
                        <label for="cnic" className="form-label">CNIC No.</label>
                        <input type="number" className="form-control" id="cnic" required />
                    </div>
                     
                    <div className="mb-3">
                        <label for="address" className="form-label">Adress</label>
                        <input type="text" className="form-control" id="address" required />
                    </div>
                    <div className="mb-3">
                        <label for="price" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price" required />
                    </div>
                    <div className="mb-3" id='addDynamic'>
                        <label for="roomAmenities" className="form-label">Room Amenities</label>
                         <button type= 'button' onClick={addAmenities} className='add-properties'>Add Amenities</button> 
                        <input type="text" className="form-control" id="roomAmenities" required />
                    </div>
                    <div className="mb-3" id='addFeatures'>
                        <label for="roomFeatures" className="form-label">Room Features</label>
                        <button type= 'button' onClick={addFeatures} className='add-properties'>Add Features</button> 
                        <input type="text" className="form-control" id="roomFeatures" required />
                    </div>
                    <div className="mb-3" id='addTypes'>
                        <label for="roomTypes" className="form-label">Room Types</label>
                        <button type= 'button' onClick={addTypes} className='add-properties'>Add Types</button> 
                        <input type="text" className="form-control" id="roomTypes" required />
                    </div>
                    

                    <button type="submit" className="btn btn-primary sbmt">Submit</button>
                </form>

            </div>

        </>
    )
}
