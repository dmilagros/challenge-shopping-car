import axios from "axios";

const baseUrl = "https://60c6708619aa1e001769f49c.mockapi.io/api";

export const getProducts = async () => {
  const res = await axios.get(`${baseUrl}/shopping-cart/list`);
  return res;
};
