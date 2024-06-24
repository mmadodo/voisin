import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`/api/events/${id}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setEvent(response.data);
            } catch (error) {
                console.error('Error fetching event', error);
            }
        };
        fetchEvent();
    }, [id]);

    const handleJoin = async () => {
        try {
            const response = await axios.post(`/api/events/join/${id}`, {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setEvent(response.data);
        } catch (error) {
            console.error('Error joining event', error);
        }
    };

    const handleLeave = async () => {
        try {
            const response = await axios.post(`/api/events/leave/${id}`, {}, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setEvent(response.data);
        } catch (error) {
            console.error('Error leaving event', error);
        }
    };

    return (
        <div>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <button onClick={handleJoin}>Join Event</button>
            <button onClick={handleLeave}>Leave Event</button>
        </div>
    );
};

export default EventDetails;
