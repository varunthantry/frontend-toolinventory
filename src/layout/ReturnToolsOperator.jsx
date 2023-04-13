import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ReturnToolsOperator() {

    const[id, setId] = useState("")
  const location = useLocation();
  console.log(location.state);
  

  useEffect(()=>{
    console.log(location.state.toolsid)
  })
  return (
    <div>
       <p>hi</p>
       <p>{location.state.id}</p>
       
    </div>
  );
}
