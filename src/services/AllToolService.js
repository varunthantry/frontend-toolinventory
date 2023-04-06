import { apiHelper } from "./apiHelper";

// export function getAllTool(){

//     const data = [
//         {
//         "id": 1,
//         "name": "Hammer",
//         "unit": "100"
//       }, {
//         "id": 2,
//         "name": "Screw",
//         "unit": "510"
//       }, {
//         "id": 3,
//         "name": "Pinchis",
//         "unit": "100"
//       }, {
//         "id": 4,
//         "name": "Cutter",
//         "unit": "770"
//       }
//     ]

//     return data;
// }

export const getAllMachineSelect = async () => {
  try {
    const response = await apiHelper.get(`/machines`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};

export const getAllToolTypeSelect = async (id) => {
  try {
    const response = await apiHelper.get(`/machines/${id}/available-toolTypes`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};

export const getAddTool = async (data) => {
  try {
    const response = await apiHelper.post(`/tools/add`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};
