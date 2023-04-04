import { apiHelper } from "./apiHelper";

export const getUserLogin = async (data) => {
  try {
    const response = await apiHelper.post(`/users/login`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
 };


 export const getUserMe = async () => {
  const token = `Bearer ${localStorage.getItem("token")}` 
  try {
    const response = await apiHelper.get(`/users/me`,{headers:{"Authorization": token}});
    
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
 };

