// export function getSelectTools() {

//     const data = [
//         {
//         "id": "1",
//         "machine_name": "Machine A",
//         "description": "TIRIOTOIO",
//         "tool_used" : ["hammer", "cutter"],
//         "image" : "https://www.adaniwilmar.com/-/media/Project/Wilmar/about-us/BAKERY.jpg?la=en&hash=36680AC142550138A6B0B2D0D56CD980",
//         "available": false
//       }, {
//         "id": "2",
//         "machine_name": "Machine B",
//         "description": "joij nkjnjoi",
//         "tool_used" : ["hammer", "cutter", "saw"],
//         "image" : "https://static.zawya.com/version/c:NzQ3ZThlNmYtMDVjZC00:ZTBiOWY5/210815115728hlfm-jpg.webp?f=3%3A2&q=0.75&w=640",
//         "available": true
//       }, {
//         "id": "3",
//         "machine_name": "Machine C",
//         "description": "NCBNCVNBVCMBNM",
//         "tool_used" :["hammer", "cutter", "saw"],
//         "image" : "https://d382rz2cea0pah.cloudfront.net/wp-content/uploads/2022/12/Adani-Starts-Construction-of-its-30000-MTPA-Polysilicon-Manufacturing-Facility.png",
//         "available": true
//       }, {
//         "id": "4",
//         "machine_name": "Machine D",
//         "description": "PPPPPPPPPPPPPPPPP",
//         "tool_used" : ["cutter", "saw"],
//         "image" : "https://www.adanienterprises.com/-/media/Project/Enterprises/Business/Solar-Banner.jpg?la=en&hash=39B65C0A5A3FA54A0E9CB96C476BCB7B",
//         "available": false
//       }
//     ]

//     return data;
// }

import { apiHelper } from "./apiHelper";

export const getMachines = async () => {
  try {
    const response = await apiHelper.get(`/machines`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};

export const getToolTypeused = async (id) => {
  try {
    const response = await apiHelper.get(`/machines/${id}/available-toolTypes`);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};

export const RequestTool = async (data) => {
  try {
    const response = await apiHelper.post(`/approval/raise-request`, data);
    return await Promise.resolve(response.data);
  } catch (err) {
    console.log("error while running", err);
    return await Promise.reject(err);
  }
};
