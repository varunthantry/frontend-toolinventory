// export function getLedgerDetails() {

//     const data = [
//         {
//         "operator_id": "p_01",
//         "operator_name": "Ram",
//         "machine_name": "Machine A",
//         "tool_type_name":"Cutter",
//         "tool_id" : "t_02",
//         "start_time" : "02:35",
//         "end_time" : "03:55"
//       }, {
//         "operator_id": "p_04",
//         "operator_name": "Yash",
//         "machine_name": "Machine D",
//         "tool_type_name":"Sharpner",
//         "tool_id" : "t_05",
//         "start_time" : "12:55",
//         "end_time" : "03:25"
//       }, {
//         "operator_id": "p_02",
//         "operator_name": "Lavina",
//         "machine_name": "Machine C",
//         "tool_type_name":"Cutter",
//         "tool_id" : "t_08",
//         "start_time" : "09:35",
//         "end_time" : "05:55"
//       }, {
//         "operator_id": "p_09",
//         "operator_name": "Krati",
//         "machine_name": "Machine B",
//         "tool_type_name":"Sharpner",
//         "tool_id" : "t_07",
//         "start_time" : "10:05",
//         "end_time" : "05:25"
//       }
//     ]
    
//     return data;
// }


import { apiHelper } from "./apiHelper";



export const getLedgerDetails = async () => {
  try {
  const response = await apiHelper.get(`/toolLedger`);
  return await Promise.resolve(response.data);
  } catch (err) {
  console.log("error while running", err);
  return await Promise.reject(err);
  }
 };

 export const getSearchLedger = async (query) => {
  try {
  const response = await apiHelper.get(`/toolLedger?q=${query}`);
  return await Promise.resolve(response.data);
  } catch (err) {
  console.log("error while running", err);
  return await Promise.reject(err);
  }
 };