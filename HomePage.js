import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the College Events Management System</h1>
            <p>Manage your college events efficiently and effectively.</p>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/events">View Events</Link>
        </div>
    );
};

export default HomePage;