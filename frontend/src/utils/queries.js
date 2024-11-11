import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Your backend base URL
    timeout: 5000, // Optional: set a timeout for requests
});

export default axiosInstance;
