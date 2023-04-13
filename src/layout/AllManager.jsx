import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { getAllManager, getDeleteManager } from "../services/UserService";

export default function AllManager(props) {
  let navigate = useNavigate;
  // const setAdmin = props.setAdmin;

  // const data = getAllManager();

  const [data, setData] = useState([]);

  useEffect(() => {
    !localStorage.getItem("token") ? navigate("/") : navigate("/Admin");
    getAllManager()
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteManager = (id) => {
    getDeleteManager(id)
      .then((res) => {
        console.log("successfully Deleted Manager");
        navigate("/Admin");
      })
      .catch((err) => {
        console.log("erroor login", err);
      });
  };

  const Role = "MANAGER";

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      {/* <div>
            <button class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5" 
            onClick={() => setAdmin(<AddManager setAdmin={setAdmin} />)}>
                <b>Add New Manager</b>
            </button>

        </div> */}

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

      <h3 class="heading pt-3 text-black">Managers</h3>
      <div className="py-4 mx-5">
        <table className="table heading shadow bg-white rounded-7">
          <thead>
            <tr>
              <th scope="col">
                <h5>S No.</h5>
              </th>
              <th scope="col">
                <h5>Manager Name</h5>
              </th>
              <th scope="col">
                <h5>Username</h5>
              </th>
              {/* <th scope="col"><h3>Password</h3></th> */}
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
                } else if (
                  dat.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
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
                    <b>{dat.name}</b>
                  </td>
                  <td>
                    <b>{dat.email}</b>
                  </td>
                  {/* <td><b>{dat.password}</b></td> */}

                  <td>
                    {/* <Link className='btn btn-outline-primary mx-2'
                                        to={`/edituser/${user.id}`}
                                        >Edit</Link>
                                        <button className='btn btn-danger mx-2'
                                        onClick={()=>deleteUser(user.id)}>Delete</button> */}

                    <Link
                      className="btn btn-outline-primary mx-2"
                      // to="" onClick={() => {setAdd(<EditManager />)}}
                      to={`/editManager?id=${dat?.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteManager(dat?.id)}
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
  );
}
