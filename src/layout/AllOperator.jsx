import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllOperator, getDeleteOperator } from "../services/OperatorService";
import SearchIcon from "@mui/icons-material/Search";
import "./css/button.css"

import AddOperator from "./AddOperator";
import EditOperator from "./EditOperator";
import Loader from "../Loader/Loader";

export default function AllOperator(props) {
  const setManager = props.setManager;
  // const data = getAllOperator();

  const [loader, setLoader] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    // getAllOperator().then((res)=>{
    //     setData(res);
    //     console.log(res);
    // }).catch((err)=>{
    //     console.log(err);
    // })

    loadOperator();
  }, []);

  const deleteOperator = (id) => {

    setLoader(false);
    getDeleteOperator(id)
      .then((res) => {
        console.log("successfully Deleted Operator");
        // navigate("/Admin")
        loadOperator();
      })
      .catch((err) => {
        console.log("erroor login", err);
      })
      .finally(()=>{
        setLoader(true);

      })
  };

  const loadOperator = () => {

    setLoader(false);
    getAllOperator()
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        setLoader(true);

      })
  };

  const Role = "OPERATOR";

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>

{loader ? (
  <div>
          <div>
            <button
              class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5"
              onClick={() => setManager(<AddOperator setManager={setManager} />)}
            >
              <b>Add New Operator</b>
            </button>
          </div>

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

          <h3 class="heading pt-3 text-black">Operators</h3>

          <div className="py-4 mx-5">
            <table className="table  shadow bg-white rounded-7">
              <thead>
                <tr>
                  <th scope="col">
                    <h5>S No.</h5>
                  </th>
                  <th scope="col">
                    <h5>Title</h5>
                  </th>
                  <th scope="col">
                    <h5>Name</h5>
                  </th>
                  <th scope="col">
                    <h5>Username</h5>
                  </th>
                  <th scope="col">
                    <h5>Phone No.</h5>
                  </th>

                  <th scope="col">
                    <h5>Action</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((dat) => {
                    if (searchTerm === "" && Role === dat.role) {
                      return dat;
                    }
                    else if (
                  dat.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                  Role === dat.role
                ) {
                  return dat;
                } else if (
                      dat.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                      Role === dat.role
                    ) {
                      return dat;
                    } else if (
                      dat.email.toLowerCase().includes(searchTerm.toLowerCase()) &&
                      Role === dat.role
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
                        <b>{dat.title}</b>
                      </td>
                      <td>
                        <b>{dat.name}</b>
                      </td>
                      <td>
                        <b>{dat.email}</b>
                      </td>

                      <td>
                        <b>{dat.phoneNumber}</b>
                      </td>

                      <td>
                        {/* <Link className='btn btn-outline-primary mx-2'
                                        to={`/edituser/${user.id}`}
                                        >Edit</Link>
                                        <button className='btn btn-danger mx-2'
                                        onClick={()=>deleteUser(user.id)}>Delete</button> */}

                        <button
                          className="btn btn-outline-primary mx-2 blue-button"
                          onClick={() =>
                            setManager(
                              <EditOperator setManager={setManager} id={dat.id} />
                            )
                          }
                        >
                          <b className="blue-button-name">Edit</b>
                        </button>

                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => deleteOperator(dat?.id)}
                        >
                          Delete
                        </button>
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
}
