import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/events', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events', error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <h1>Events</h1>
            <ul>
                {events.map(event => (
                    <li key={event._id}>
                        <Link to={`/events/${event._id}`}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
