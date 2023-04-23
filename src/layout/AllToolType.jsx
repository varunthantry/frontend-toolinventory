import React, { useState, useEffect } from "react";
// import { Link} from 'react-router-dom';
import { getAllToolType, getDeleteToolTypes } from "../services/AllToolType";
import AddToolType from "./AddToolType";
import SearchIcon from "@mui/icons-material/Search";
import Loader from "../Loader/Loader";
// import APIheader from '../services/apiHelper';

export default function AllToolType(props) {
  const setManager = props.setManager;

  const [loader, setLoader] = useState(true);


  const [data, setData] = useState([]);
  useEffect(() => {
    loadtoolTypes();
  }, []);

  const deleteToolTypes = (id) => {

    setLoader(false);
    getDeleteToolTypes(id)
      .then((res) => {
        console.log("successfully Deleted Operator");
        loadtoolTypes();
      })
      .catch((err) => {
        console.log("erroor login", err);
      })
      .finally(()=>{
        setLoader(true);

      })
  };

  const loadtoolTypes = () => {

    setLoader(false);
    getAllToolType()
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

  // const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const dataAvialable = data.length;

  return (
    <div>

    {loader ? (

      <div>
<<<<<<< HEAD

       
              <div>
                <button
                  class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5"
                  onClick={() => setManager(<AddToolType setManager={setManager} />)}
                >
                  <b>Add Tool Type</b>
                </button>
              </div>

              {dataAvialable === 0 ? (<h3 class="heading pt-5 text-black">No Data Available</h3>) : (
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

          <h3 class="heading pt-3 text-black">Tool Type</h3>
          <div className="py-4 mx-5">
            <table className="table  shadow bg-white rounded-7">
              <thead>
                <tr>
                  <th scope="col">
                    <h5>S No.</h5>
                  </th>
                  <th scope="col">
                    <h5>Tool Type Name</h5>
                  </th>
                  <th scope="col">
                    <h5>Action</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((dat) => {
                    if (searchTerm === "") {
                      return dat;
                    } else if (
                      dat.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                              
                              <button
                                className="btn btn-danger mx-2"
                                onClick={() => deleteToolTypes(dat?.id)}
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
          )} 
           
          </div>

=======

       
              <div>
                <button
                  class="ml-2 btn btn-danger btn-sm pt-4 mt-5 mx-5"
                  onClick={() => setManager(<AddToolType setManager={setManager} />)}
                >
                  <b>Add Tool Type</b>
                </button>
              </div>

              {dataAvialable === 0 ? (<h3 class="heading pt-5 text-black">No Data Available</h3>) : (
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

                <h3 class="heading pt-3 text-black">Tool Type</h3>
                <div className="py-4 mx-5">
                  <table className="table  shadow bg-white rounded-7">
                    <thead>
                      <tr>
                        <th scope="col">
                          <h5>S No.</h5>
                        </th>
                        <th scope="col">
                          <h5>Tool Type Name</h5>
                        </th>
                        <th scope="col">
                          <h5>Action</h5>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data
                        .filter((dat) => {
                          if (searchTerm === "") {
                            return dat;
                          } else if (
                            dat.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                              
                              <button
                                className="btn btn-danger mx-2"
                                onClick={() => deleteToolTypes(dat?.id)}
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
          )} 
           
          </div>

>>>>>>> a9c69335bb5bbceabcdfff1b807ce2b0fdb7107a
          ) : (
          <Loader />
          )}
    </div>
  );
}
