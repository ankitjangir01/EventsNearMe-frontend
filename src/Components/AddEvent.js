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
    <div>
      <Navbar />
      <div className="add-event-page d-flex justify-content-end">
        <div className="w-40 add-event-form mx-4 my-4 bg-light">
          <form className="form-control p-4" method='POST' action="http://localhost:5000/api/events/addevent" encType='multipart/form-data' >
            <div className='form-control mr-2 mt-2 mb-4'>
            <label htmlFor="eventPoster" className='text-muted'>Upload event image/poster<br/> </label>
            <br/>
            <br/>
            <input type="file" name='eventPoster'/>
            </div>
            <input type="text" className="form-control mr-2 my-2" placeholder="event title" name='title' onChange={onChange} />
            <textarea className='form-control mr-2 my-4' placeholder='event description' name='description' onChange={onChange} />
            <input type="text" className="form-control mr-2 my-2" placeholder="address (landmark/area/colony)" name='address' onChange={onChange} />
            <div className="row">
              <div className="col">
                <input type="text" className="form-control mr-2 my-2" placeholder="city" name='city' onChange={onChange} />
              </div>
              <div className="col">
                <input type="text" className="form-control mr-2 my-2" placeholder="district" name='district' onChange={onChange} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control mr-2 my-2" placeholder="state" name='state' onChange={onChange} />
              </div>
              <div className="col">
                <input type="text" className="form-control mr-2 my-2" placeholder="country" name='country' onChange={onChange} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control mr-2 my-2" placeholder="number of days/ duration" name='days' onChange={onChange} />
              </div>
              <div className="col">
                <input type="text" className="form-control mr-2 my-2" placeholder="date of event" name='date' onChange={onChange} />
              </div>
              <button type="submit" className="btn btn-secondary custom-btn btn-block mt-4">Add</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AddEvent