import axios from 'axios';

// Base URL for JSONPlaceholder API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Function to fetch all users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    console.log('Fetched Users:', response.data); // Logging users for debugging purposes
    return response.data;  
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;  
  }
};
