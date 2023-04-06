import React, { useEffect, useState } from "react";
import NavbarOperator from "../layout/navbarOperator";
import ToolRequestOperator from "../layout/ToolRequestOperator";
import "./css/style.css";
import { useNavigate } from "react-router-dom";

export default function Operator() {
  let navigate = useNavigate();
  useEffect(() => {
    !localStorage.getItem("token") ? navigate("/") : navigate("/Operator");
  }, []);

  const [operator, setOperator] = useState(<ToolRequestOperator />);
  return (
    <div>
      <div>
        <NavbarOperator setOperator={setOperator} />
      </div>

      <div class="pt-2">{operator}</div>
    </div>
  );
}
