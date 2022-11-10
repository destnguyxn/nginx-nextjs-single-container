import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3005'
axios.defaults.baseURL = BASE_URL
