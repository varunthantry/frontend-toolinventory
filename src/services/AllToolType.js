import { apiHelper } from "./apiHelper";

// export function getAllToolType(){

//   apiHelper.get(`https://localhost:8989/toolTypes`).then((res)=>{
//     return res.data;
//   }).catch((err)=>{
//     console.log(err)
//   })
   
// } 

export const getAllToolType = async () => {
  try {
  const response = await apiHelper.get(`/users`);
  return await Promise.resolve(response.data);
  } catch (err) {
  console.log("error while running", err);
  return await Promise.reject(err);
  }
 };