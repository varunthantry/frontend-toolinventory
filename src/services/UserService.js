// export function getAllManager() {
//     const data = [
//         {
//         "id": "p_01",
//         "name": "Ram",
//         "username": "ram234",
//         "password":"fdfsdf"
//       }, {
//         "id": "p_04",
//         "name": "Yash",
//         "username": "Yash987",
//         "password":"jekhskfjs"
//       }, {
//         "id": "p_05",
//         "name": "Lavina",
//         "username": "lav9879",
//         "password":"rrrrrr"
//       }, {
//         "id": "p_06",
//         "name": "Kothari",
//         "username": "kothari932",
//         "password":"sfjsif"
//       }
//     ]

//     return data;
// };



import { apiHelper } from "./apiHelper";

export const getAllManager = async () => {

  const token = `Bearer ${localStorage.getItem("token")}`
  try {
  const response = await apiHelper.get(`/users` ,{headers:{"Authorization": token}});
  return await Promise.resolve(response.data);
  } catch (err) {
  console.log("error while running", err);
  return await Promise.reject(err);
  }
 };

 
export const getDeleteManager = async (id) => {

  const token = `Bearer ${localStorage.getItem("token")}`
  try {
  const response = await apiHelper.delete(`/users/${id}` , {headers:{"Authorization": token}});
  return await Promise.resolve(response.data);
  } catch (err) {
  console.log("error while running", err);
  return await Promise.reject(err);
  }
 };




