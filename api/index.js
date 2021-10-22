const axios = require('axios');

require('dotenv').config();

const ROOT = process.env.ROOT_URL;
const API_KEY = process.env.API_KEY;

// AXIOS Instance for FT API
const instance = axios.create({
  baseURL: ROOT,
  headers: {
    'X-Api-Key': API_KEY,
    'Content-Type': 'application/json',
  },
});
const http = instance;
module.exports = http;
