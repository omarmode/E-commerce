const { default: axiosClint } = require("./axiosClint");

const addtoCart = (payload) => axiosClint.post("/carts", payload);

const getusergetCartItems = (email) =>
  axiosClint.get(
    `carts?populate[products][populate]=banner&filters[email][$eq]=${email}`
  );
const deleteCart = (id) => axiosClint.delete(`/carts/${id}`);
export default {
  addtoCart,
  getusergetCartItems,
  deleteCart,
};
