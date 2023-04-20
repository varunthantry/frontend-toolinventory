import React, { useState, useEffect } from "react";
import { getLedgerDetails, getSearchLedger } from "../services/LedgerService";
import SearchIcon from "@mui/icons-material/Search";
import Loader from "../Loader/Loader";

export default function Ledger() {
  // const [searchTerm, setSearchTerm] = useState("");

  const [loader, setLoader] = useState(true);
  //   const data = getLedgerDetails();

  const [data, setData] = useState([]);
  const [values, setvalues] = useState("")
 
  useEffect(() => {

    setLoader(false);
    getLedgerDetails()
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
  }, []);

  useEffect(()=>{
    search(values)
  }, [values])


  const search = (query) => {
    console.log("ffff", query)

    // setvalues(e.target.value)
    setLoader(false);

    getSearchLedger(query)
    .then((res) => {
      setData(res);
      console.log("qqqq",res);
    })
    .catch((err) => {
      console.log("eee", err);
    })
    .finally(()=>{
      setLoader(true);
      // e.focus();
    })
  }

  const dataAvialable = data.length;
  // console.log("dddd",dataAvialable)

  return (

    // <div>
    // {dataAvialable === 0 ? (<h3 class="heading pt-5 text-black">No Data Available</h3>) : (
            <div>

        {loader ? (
            <div>

                  <div class="nav-link navi mx-1 my-4 text-black rounded-7">
                    
                    <input
                    key="search-field"
                      type="text"
                      placeholder="Search...."
                      class="rounded-7"
                      autoFocus="true"
                      // onChange={(event) => {
                      //   setSearchTerm(event.target.value);
                      // }}
                      value = {values}
                      onChange={(e) => {
                        
                        setvalues(e.target.value)
                      }}
                    />
                    <SearchIcon />
                  </div>
                  <h3 class="heading pt-3 text-black">Tool Ledger</h3>

                  {dataAvialable === 0 ? (<h3 class="heading pt-5 text-black">No Data Available</h3>) : (
                     <div>
                  <div className="py-4 mx-5">
                    <table className="table  shadow bg-white rounded-7">
                      <thead>
                        <tr>
                        <th scope="col">
                            <h5>S No.</h5>
                          </th>
                          <th scope="col">
                            <h5>Machine Id</h5>
                          </th>
                          <th scope="col">
                            <h5>Machine Name</h5>
                          </th>
                          <th scope="col">
                            <h5>Operator Name</h5>
                          </th>
                          <th scope="col">
                            <h5>User Id</h5>
                          </th>
                          <th scope="col">
                            <h5>Tool Type Name : Units</h5>
                          </th>
                          {/* <th scope="col"><h3>Tool Id</h3></th> */}
                          <th scope="col">
                            <h5>In use</h5>
                          </th>
                          <th scope="col">
                            <h5>Approval Id</h5>
                          </th>
                          <th scope="col">
                            <h5>Take DateTime</h5>
                          </th>
                          <th scope="col">
                            <h5>Return DateTime</h5>
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {data
                          .map((dat, index) => (
                            <tr>
                            <td>
                                <b>{index+1}</b>
                              </td>
                              <th scope="row" key={index}>
                                <b>{dat.machineId}</b>
                              </th>
                              <td>
                                <b>{dat.machineName}</b>
                              </td>
                              <td>
                                <b>{dat.userName}</b>
                              </td>
                              <td>
                                <b>{dat.showUserId}</b>
                              </td>
                              <td>
                                {Object.keys(dat?.toolTypeNameAndUnits).map((k) => (
                                  <b>
                                    {k + " : " + dat?.toolTypeNameAndUnits[k]} <br />
                                  </b>
                                ))}
                              </td>
                              
                              <td>
                                <b>{String(dat.isInUse)}</b>
                              </td>
                              <td>
                                <b>{dat.approvalId}</b>
                              </td>
                              <td>
                                <b>{dat.startDateTime}</b>
                              </td>
                              <td>
                                <b>{dat.returnDateTime}</b>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
              </div>
            )}
    
              </div>

              ) : (
              <Loader />
              )}
            </div>

    
  );
}
