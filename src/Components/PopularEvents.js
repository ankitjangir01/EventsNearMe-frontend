import React from 'react';
import { useEffect } from 'react';
import Event from './Event';
import { useState } from 'react';

const PopularEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchAllEvents = async () => {
            const response = await fetch('http://localhost:5000/api/events/allevents');
            const json = await response.json();
            setEvents(json.allevents);
        }
        fetchAllEvents();
    }, [])

    
    return (
        <div>
            <div className='container my-3 row'>
                <h2>Popular Events</h2>
                {
                    events.map((event) => {
                        return <Event key={event._id} event={event} />
                    })
                }
            </div>
        </div>
    )
}

export default PopularEvents