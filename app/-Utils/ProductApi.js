const { default: axiosClint } = require("./axiosClint");

const getlatestproducts = () => axiosClint.get("/products?populate=*");
const getprouctid = (id) => axiosClint.get(`/products/${id}?populate=*`);
export default {
  getlatestproducts,
  getprouctid,
};
