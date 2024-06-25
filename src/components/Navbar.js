import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/newsfeed">Newsfeed</Link></li>
                <li><Link to="/privacy">Privacy Settings</Link></li>
                <li><Link to="/admin">Admin</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
