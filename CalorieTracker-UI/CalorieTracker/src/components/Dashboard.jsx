import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard({ setAuthenticated }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    // Fetch user info when the component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/auth/user', { withCredentials: true });
                setUser(response.data);
            } catch (err) {
                setError('Unable to fetch user data. Please try again later.');
            }
        };

        fetchUserData();
    }, []);

    // Logout function
    const handleLogout = async () => {
        try {
            await axios.post('/auth/logout', {}, { withCredentials: true });
            setAuthenticated(false); // Reset authentication state
        } catch (err) {
            setError('Logout failed. Please try again.');
        }
    };

    return (
        <div className="dashboard">
            <h1>Welcome to Your Dashboard</h1>

            {error && <p className="error">{error}</p>}

            {user ? (
                <div>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                </div>
            ) : (
                <p>Loading user information...</p>
            )}

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
