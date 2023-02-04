import axios from "axios";

const createInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  timeout: 1000,
});

export const getAllProducts = async () => {
  const { data } = await createInstance.get("/products");
  return data;
};
export const getSingleProduct = async (id) => {
  const { data } = await createInstance.get(`/products/${id}`);
  return data;
};
export const createProduct = async (body) => {
  const { data } = await createInstance.post("/create", body);
  return data;
};
export const updateProduct = async (id, body) => {
  const { data } = await createInstance.put(`/products/${id}`, body);
  return data;
};
export const deleteProduct = async (id) => {
  const { data } = await createInstance.delete(`/products/${id}`);
  return data;
};
