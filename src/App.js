import './App.css'; // Import the CSS file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Profile/Profile';
import EventList from './components/Events/EventList';
import EventDetails from './components/Events/EventDetails';
import Newsfeed from './components/Newsfeed/Newsfeed';
import PrivacySettings from './components/Privacy/PrivacySettings';
import AdminPanel from './components/Admin/AdminPanel';
import Navbar from './components/Navbar'; // Import Navbar component

const App = () => {
    return (
        <Router>
            <Navbar /> {/* Include Navbar component */}
            <Routes>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/events/:id" component={EventDetails} />
                <Route path="/events" component={EventList} />
                <Route path="/newsfeed" component={Newsfeed} />
                <Route path="/privacy" component={PrivacySettings} />
                <Route path="/admin" component={AdminPanel} />
            </Routes>
        </Router>
    );
};

export default App;
