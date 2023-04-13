import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllReturnTools } from "../services/ToolRequestService";

export default function ToolRequestOperator() {
  // const data = getToolRequest();

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    loadReturnTools();
  }, []);

  const loadReturnTools = () => {
    getAllReturnTools()
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const ReturnToolsPage = (Id,Toolsid) => {

    navigate("/ReturnTools", {state : {id: Id} }, {state:{toolsid : Toolsid}})
  }

  const Status = "APPROVED";

  return (
    <div>
      <h3 class="heading pt-5 text-black">Return Tool</h3>
      <div className="py-4 mx-5">
        <table className="table heading shadow bg-white rounded-7">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <h3>Machine Name</h3>
              </th>
              <th scope="col">
                <h3>Tool Name : Units</h3>
              </th>
              {/* <th scope="col">
                <h3>Units</h3>
              </th> */}
              <th scope="col">
                <h3>Return Requests</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((dat) => {
                if (Status === dat.status) {
                  return dat;
                }
              })
              .map((dat, index) => (
                <tr>
                  <th scope="row" key={index}>
                    <b>{index + 1}</b>
                  </th>
                  <td>
                    <b>{dat.machineName}</b>
                  </td>

                  <td>
                    {/* <b>{Object.keys(dat.toolTypeNameAndUnits)}</b>
                    <b> : </b>
                    <b>{Object.values(dat.toolTypeNameAndUnits)}</b> */}

                    {Object.keys(dat?.toolTypeNameAndUnits).map((k) => (
                      <b>
                        {k + " : " + dat?.toolTypeNameAndUnits[k]} <br />
                      </b>
                    ))}
                  </td>

                  <td>
                    <button className="btn btn-outline-primary mx-2" onClick={()=> ReturnToolsPage(dat?.id, dat?.toolIds)}>Return</button>
                  
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
