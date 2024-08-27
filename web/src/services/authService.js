import axios from 'axios';

// Function to handle user login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('https://your-api-endpoint.com/login', {
      email,
      password,
    });

    // Assuming the token is returned in the response
    const { token } = response.data;

    // Save the token to local storage or session storage
    localStorage.setItem('authToken', token);

    // Return the response
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// Optionally, add other authentication functions like logout, register, etc.
