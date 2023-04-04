import { apiHelper } from "./apiHelper";




export const getOperatorDetails = async (id) => {
    // const token = `Bearer ${sessionStorage.getItem("token")}`
    try {
    const response = await apiHelper.get(`/users/${id}`);
    return await Promise.resolve(response.data);
    } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
    }
};


export const getEditOperator = async (data, id) => {

    // const token = `Bearer ${sessionStorage.getItem("token")}`
  try {
    const response = await apiHelper.put(`/users/${id}`, data);

    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
 };

