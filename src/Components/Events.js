import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Event from './Event';

const Events = () => {
    let initialEvents = [];
    const [events, setEvents] = useState(initialEvents);

    useEffect(() => {
        return fetchAllNotes();
    }, [])

    const fetchAllNotes = async () => {
        const response = await fetch('/api/events/allevents', {
            method: 'get',
        }
        )
        const json = await response.json();
        return json;
    }

    return (
        <div>
            <div className='container my-3 row'>
                <h2>Popular Events</h2>
                {
                    Array.from(events).map((event) => {
                        return <Event key={event._id} event={event} />
                    })
                }
            </div>
        </div>
    )
}

export default Events