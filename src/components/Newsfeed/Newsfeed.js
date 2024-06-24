import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Newsfeed = () => {
    const [newsfeed, setNewsfeed] = useState([]);

    useEffect(() => {
        const fetchNewsfeed = async () => {
            try {
                const response = await axios.get('/api/newsfeed', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setNewsfeed(response.data);
            } catch (error) {
                console.error('Error fetching newsfeed', error);
            }
        };
        fetchNewsfeed();
    }, []);

    return (
        <div>
            <h1>Newsfeed</h1>
            <ul>
                {newsfeed.map(post => (
                    <li key={post._id}>
                        <p>{post.content}</p>
                        <small>{post.createdAt}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Newsfeed;
