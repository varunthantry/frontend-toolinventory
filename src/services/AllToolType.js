import { apiHelper } from "./apiHelper";

export const getAllToolType = async () => {
  try {
    const response = await apiHelper.get(`/toolTypes`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};

export const getAddToolType = async (data) => {
  try {
    const response = await apiHelper.post(`/toolTypes`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};

export const getDeleteToolTypes = async (id) => {
  const token = `Bearer ${localStorage.getItem("token")}`;
  try {
    const response = await apiHelper.delete(`/toolTypes/${id}`, {
      headers: { Authorization: token },
    });
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};
