import React, { useState, useEffect, createContext } from 'react';

// Create a new context
export const UserContext = createContext();

// Create a context provider component
export const UserProvider = ({ children }) => {
    // State to store the user data
    const [userData, setUserData] = useState(null);

    // Function to fetch user data from the API
    const fetchUserData = async () => {
        try {
            const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
            const json = await response.json();
            setUserData(json);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    // Fetch user data when the component mounts
    useEffect(() => {
        fetchUserData();
    }, []);

    // Return the context provider with the user data as the value
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};
