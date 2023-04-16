import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { getAllManager, getDeleteManager } from "../services/UserService";
import Loader from "../Loader/Loader";
import "./css/button.css"

export default function AllManager() {
  let navigate = useNavigate;
  // const setAdmin = props.setAdmin;

  // const data = getAllManager();

  const [loader, setLoader] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    // !localStorage.getItem("token") ? navigate("/") : navigate("/Admin");
     
    loadManager();
  }, []);

  const loadManager = () => {

    setLoader(false);
    getAllManager()
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
  } 

  const deleteManager = (id) => {
    setLoader(false);
    getDeleteManager(id)
      .then((res) => {
        console.log("successfully Deleted Manager");
        navigate("/Admin");
        loadManager();
      })
      .catch((err) => {
        console.log("erroor login", err);
      }).finally(()=>{
        setLoader(true);
        loadManager();
      })
  };

  const Role = "MANAGER";

  const [searchTerm, setSearchTerm] = useState("");

  return (
   
   
    <div>

    {loader ? (
     

        <div>

        <div class="nav-link navi mx-1 my-4 text-black rounded-7">
        
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
                 
                  <td>

                    <Link
                      className="btn btn-outline-primary mx-2 blue-button"
                      to={`/editManager?id=${dat?.id}`}
                    >
                      <b className="blue-button-name">Edit</b>
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

      ) : (
       <Loader />
      )}
    </div>
    
  );
}
