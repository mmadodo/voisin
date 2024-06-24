import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PrivacySettings = () => {
    const [visibility, setVisibility] = useState('');
    const [blockList, setBlockList] = useState('');

    useEffect(() => {
        const fetchPrivacySettings = async () => {
            try {
                const response = await axios.get('/api/privacy', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setVisibility(response.data.visibility);
                setBlockList(response.data.blockList.join(', '));
            } catch (error) {
                console.error('Error fetching privacy settings', error);
            }
        };
        fetchPrivacySettings();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/privacy/update', {
                visibility,
                blockList: blockList.split(',').map(user => user.trim())
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setVisibility(response.data.visibility);
            setBlockList(response.data.blockList.join(', '));
        } catch (error) {
            console.error('Error updating privacy settings', error);
        }
    };

    return (
        <div>
            <h1>Privacy Settings</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Visibility" value={visibility} onChange={(e) => setVisibility(e.target.value)} required />
                <input type="text" placeholder="Block List" value={blockList} onChange={(e) => setBlockList(e.target.value)} required />
                <button type="submit">Update Privacy Settings</button>
            </form>
        </div>
    );
};

export default PrivacySettings;
