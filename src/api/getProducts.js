const axios = require("axios").default;
const BASE_API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getProducts = async () => {
  try {
    const res = await axios.get(BASE_API_URL);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
