import React, { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import "../modal/Modal.css";
import { getAllApprovalRequest } from "../services/AllManagerApproval";
// import Searchbar from './Searchbar';
import SearchIcon from "@mui/icons-material/Search";
import Loader from "../Loader/Loader";

// const data = getAllManagerApproval();

const ManagerApproval = () => {
  const [data, setData] = useState([]);

  const [loginloader, setloginloader] = useState(true);

  useEffect(() => {
    loadApprovalRequest();
  }, []);

  const loadApprovalRequest = () => {
    setloginloader(false);
    getAllApprovalRequest()
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }).finally(()=>{
        setloginloader(true);
      })
  };

  const [searchTerm, setSearchTerm] = useState("");
  const Status = "PENDING";

  return (
    // <Modal />
    <div>

{loginloader ? (
  <div>
      <div class="nav-link navi mx-1 my-4 text-black rounded-7">
        {/* <Searchbar /> */}

        <input
          type="text"
          placeholder="Search...."
          class="rounded-7"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <SearchIcon />
      </div>
      <h3 class="heading pt-3 text-white">Tool Request</h3>

      <div className="py-4 mx-5">
        <table className="table  shadow bg-white rounded-7">
          <thead>
            <tr>
              <th scope="col">
                <h5>S No.</h5>
              </th>
              <th scope="col">
                <h5>User Name</h5>
              </th>
              <th scope="col">
                <h5>Machine Id</h5>
              </th>
              <th scope="col">
                <h5>Machine Name</h5>
              </th>
              <th scope="col">
                <h5>Tool Name : Units</h5>
              </th>

              {/* <th scope="col">
                <h5>Units</h5>
              </th> */}
              <th scope="col">
                <h5>Request At</h5>
              </th>
              <th scope="col">
                <h5>Approve/decline</h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((dat) => {
                if (searchTerm === "" && Status === dat.status) {
                  return dat;
                }
                else if (
                  dat.userName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) && Status === dat.status
                ) {
                  return dat;
                }
                else if (
                  dat.machineName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) && Status === dat.status
                ) {
                  return dat;
                }
                
              })
              .map((dat, index) => (
                <tr>
                  <th scope="row" key={index}>
                    <b>{index + 1}</b>
                  </th>
                  <td>
                    <b>{dat.userName}</b>
                  </td>

                  <td>
                    <b>{dat.machineId}</b>
                  </td>
                  <td>
                    <b>{dat.machineName}</b>
                  </td>
                  {/* <td>
                    <b>{}</b>
                  </td> */}
                  <td>
                    {Object.keys(dat?.toolTypeNameAndUnits).map((k) => (
                      <b>
                        {k + " : " + dat?.toolTypeNameAndUnits[k]} <br />
                      </b>
                    ))}
                  </td>
                  <td>
                    <b>{dat.requestAt}</b>
                  </td>

                  <td>
                    {/* <Link className='btn btn-outline-primary mx-2'
                                        to={`/edituser/${user.id}`}
                                        >Edit</Link>
                                        <button className='btn btn-danger mx-2'
                                        onClick={()=>deleteUser(user.id)}>Delete</button> */}

                    <Modal data={dat} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      </div>

      ) : (
       <Loader />
      )}
    </div>
  );
};

export default ManagerApproval;
