import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import { useRef } from 'react';

const AddEvent = () => {
  const uploadImageRef = useRef(null);

  const [event, setEvent] = useState({
    title: "",
    description: "",
    address: "",
    city: "",
    district: "",
    state: "",
    country: "",
    days: 0,
    date: ""
  });

  const onChange = (eve) => {
    setEvent({ ...event, [eve.target.name]: eve.target.value })
  }

  return (
    <div >
      <Navbar />
      <img className='main-background' src='https://res.cloudinary.com/eventsnearme/image/upload/v1657896991/website%20photos/balloons-2826093_1920_2_aefpuk.jpg' alt='...' />
      <div className="container d-flex row vh-100 d-flex justify-content-center align-items-center add-event-form">
        {/* <h3 className='mx-2 my-4'>Add new event</h3> */}
        <form method='POST' action="http://localhost:5000/api/events/addevent" encType='multipart/form-data' className="form-control">
          <label htmlFor="eventPoster">Upload event image/poster</label>
          <input type="file" name='eventPoster' />
          <input type="text" className="form-control mx-2 my-2" placeholder="event title" name='title' onChange={onChange} />
          <textarea className='form-control mx-2 my-2' placeholder='event description' name='description' onChange={onChange} />
          <input type="text" className="form-control mx-2 my-2" placeholder="address (landmark/area/colony)" name='address' onChange={onChange} />
          <div className="row">
            <div className="col">
              <input type="text" className="form-control mx-2 my-2" placeholder="city" name='city' onChange={onChange} />
            </div>
            <div className="col">
              <input type="text" className="form-control mx-2 my-2" placeholder="district" name='district' onChange={onChange} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control mx-2 my-2" placeholder="state" name='state' onChange={onChange} />
            </div>
            <div className="col">
              <input type="text" className="form-control mx-2 my-2" placeholder="country" name='country' onChange={onChange} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control mx-2 my-2" placeholder="number of days/ duration" name='days' onChange={onChange} />
            </div>
            <div className="col">
              <input type="text" className="form-control mx-2 my-2" placeholder="date of event" name='date' onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-primary custom-btn btn-block mx-2 w-100">Add</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default AddEvent