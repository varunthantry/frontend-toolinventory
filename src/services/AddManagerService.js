import { apiHelper } from "./apiHelper";

export const getAddManager = async (data) => {
  try {
    const response = await apiHelper.post(`/users`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};
