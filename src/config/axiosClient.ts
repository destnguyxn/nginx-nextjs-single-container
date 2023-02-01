import axios from 'axios';

// Set up default config for http requests here
// https://github.com/axios/axios#request-config - full list of configs

const baseURL = 'https://jsonplaceholder.typicode.com';

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Accept-Encoding': '*',
    'Content-Type': 'application/json',
  },
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    // Handle Error Authentication
    if (response && response.data) {
      return response;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
