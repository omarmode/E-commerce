const { default: axios } = require("axios");

const apikey = process.env.NEXT_PUBLIC_REST_API_KEY;
// const apiUrl = "http://localhost:1337/api";//old
const apiUrl = "https://commerce-strapi-1.onrender.com/api";

const axiosClint = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apikey}`,
  },
});

export default axiosClint;
