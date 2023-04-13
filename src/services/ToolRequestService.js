// export function getToolRequest() {

//     const data = [
//         {
//         "id": "1",
//         "machine_name": "Machine A",
//         "tool_name": "Hammer",
//         "unit":"78"
//       }, {
//             "id": "2",
//             "machine_name": "Machine C",
//             "tool_name": "Cutter",
//             "unit":"122"
//       }, {
//         "id": "3",
//         "machine_name": "Machine B",
//         "tool_name": "Pinchis",
//         "unit":"22"
//       }, {
//         "id": "4",
//         "machine_name": "Machine D",
//         "tool_name": "Screw Driver",
//         "unit":"10"
//       }
//     ]

//     return data;
// }

import { apiHelper } from "./apiHelper";

export const getAllReturnTools = async () => {
  try {
    const response = await apiHelper.get(`/approval`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};


export const ReturnTools = async (data) => {
  try {
    const response = await apiHelper.post(`/tools/giveTools`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
 };
