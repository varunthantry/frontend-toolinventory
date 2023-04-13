// export function getAllManagerApproval(){

//     const data = [
//         {
//         "id": 1,
//         "name": "Hammer",
//         "unit": "50"
//       }, {
//         "id": 2,
//         "name": "Screw",
//         "unit": "510"
//       }, {
//         "id": 3,
//         "name": "Pinchis",
//         "unit": "10"
//       }, {
//         "id": 4,
//         "name": "Cutter",
//         "unit": "77"
//       }
//     ]

//     return data;
// }

import { apiHelper } from "./apiHelper";

export const getAllApprovalRequest = async () => {
  try {
    const response = await apiHelper.get(`/approval`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};

export const postApproveRequest = async (id) => {
  try {
    const response = await apiHelper.post(`/approval/approved/${id}`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};

export const postRejectRequest = async (id) => {
  try {
    const response = await apiHelper.post(`/approval/rejected/${id}`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};
