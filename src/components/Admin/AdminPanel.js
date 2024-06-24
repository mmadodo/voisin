import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [events, setEvents] = useState([]);
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/admin/users', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };
        fetchUsers();

        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/admin/events', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events', error);
            }
        };
        fetchEvents();

        const fetchReports = async () => {
            try {
                const response = await axios.get('/api/admin/reports', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setReports(response.data);
            } catch (error) {
                console.error('Error fetching reports', error);
            }
        };
        fetchReports();
    }, []);

    return (
        <div>
            <h1>Admin Panel</h1>
            <div>
                <h2>Users</h2>
                <ul>
                    {users.map(user => (
                        <li key={user._id}>{user.name} ({user.email})</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Events</h2>
                <ul>
                    {events.map(event => (
                        <li key={event._id}>{event.title}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Reports</h2>
                <ul>
                    {reports.map(report => (
                        <li key={report._id}>{report.content}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminPanel;
