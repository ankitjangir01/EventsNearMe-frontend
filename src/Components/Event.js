import React from 'react';

const Event = (props) => {
  const { poster, title, description, address, city, district, state, country, date } = props.event;
  return (
    <div className='col-5 row event-card'>
      <div className="col-md-4">
        <img src={poster} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title"><strong>{title}</strong></h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><strong>Where: </strong>{address}, {city}, {district}, {state}, {country}</p>
          <p className="card-text"><strong>When: </strong>{date}</p>

          <p className="card-text"><small className="text-muted">3 days, 5 hrs to go</small></p>
        </div>
      </div>
    </div>
  )
}

export default Event