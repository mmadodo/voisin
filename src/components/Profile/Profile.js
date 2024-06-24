import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [name, setName] = useState('');
    const [interests, setInterests] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('/api/profile', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setProfile(response.data);
                setName(response.data.name);
                setInterests(response.data.interests.join(', '));
                setLocation(response.data.location);
            } catch (error) {
                console.error('Error fetching profile', error);
            }
        };
        fetchProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/profile/update', {
                name,
                interests: interests.split(',').map(interest => interest.trim()),
                location
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setProfile(response.data);
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Interests" value={interests} onChange={(e) => setInterests(e.target.value)} required />
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
                <button type="submit">Update Profile</button>
            </form>
            <img src={profile.profilePicture} alt="Profile" />
        </div>
    );
};

export default Profile;
