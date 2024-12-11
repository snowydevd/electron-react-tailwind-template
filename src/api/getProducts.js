const axios = require("axios").default;

axios.get("https://fakestoreapi.com/products").then((res) => {
  console.log(res.data);
});
