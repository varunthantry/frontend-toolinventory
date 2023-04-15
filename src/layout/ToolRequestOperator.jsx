import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { getAllReturnTools, ReturnTools } from "../services/ToolRequestService";
import { Modal, ModalBody, Col, Row, ModalHeader } from "reactstrap";
import Loader from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ToolRequestOperator() {
  // const data = getToolRequest();

  // const navigate = useNavigate();

  const [loader, setLoader] = useState(true);

  const [modal, setmodal] = useState(false);

  const [toolIdName, setToolIdName] = useState({});

  const [toolUsedtimes, setToolUsedtimes] = useState({})

  // const [ledgerid, setToolLedgerId] = useState();

  const [returntools,setReturnTools] = useState({
    approvalId :"",
    toolUsed : {}
  })

  const [data, setData] = useState([]);
  useEffect(() => {
    // console.log(ledgerid)
    // setReturnTools({...returntools,["toolLedgerId"]: ledgerid})
    loadReturnTools();
  }, []);

  

  const loadReturnTools = () => {

    setLoader(false);
    getAllReturnTools()
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

  const changeStateReturnTool = (idname, approvalid) => {
    setmodal(true);
    setToolIdName(idname);
    // setToolLedgerId(approvalid)
    // console.log(ledgerid)
    setReturnTools({...returntools,["approvalId"]: approvalid})
    
    // console.log("gggg", idname)
  };

  const onValueChange = (source, value) => {
    console.log(source, "source", value);
    const temp = { ...toolUsedtimes };
    temp[source] = value;
    setToolUsedtimes(temp);
    const temp1 = { ...returntools };
    temp1["toolUsed"] = temp;
    setReturnTools(temp1);
    // console.log(returntools)
  };

  useEffect(() => {
    console.log("Toolllluuused",toolUsedtimes);
  }, [toolUsedtimes]);

  const onSumitReturnTools = () => {
    // console.log("hhhh", toolIdName);
    console.log(returntools)

    setLoader(false);
    ReturnTools(returntools)
      .then((res) => {
        toast.info("Successfully Returned The Tools👍");
        console.log("Successfully Returned The Tools")
      })
      .catch((err) => {
        console.log("erroor login", err);
      })
      .finally(()=>{
        setLoader(true);

      })
      setmodal(false);
  };

  const Status = "APPROVED";

  return (
    <div>


      <h3 class="heading pt-5 text-black">Return Tool</h3>

      {loader ? (

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
                    {Object.keys(dat?.toolTypeNameAndUnits).map((k) => (
                      <b>
                        {k + " : " + dat?.toolTypeNameAndUnits[k]} <br />
                      </b>
                    ))}
                  </td>
                  

                  <td>
                    <button
                      className="btn btn-outline-primary mx-2"
                      onClick={() => {changeStateReturnTool(dat?.toolIdAndName, dat?.id)}}
                    >
                      Return
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      ) : (
       <Loader />
      )}

      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}>
          Enter No. of times Tool used
        </ModalHeader>
        <ModalBody>
          {/* <form> */}
          {Object.keys(toolIdName).map((k) => (
              <Row>
                <Col lg={12}>
                  <div class="form-group row">
                    <label for="inputName3" class="col-sm-2 col-form-label">
                      <h6 class="text-black">
                        <b>{toolIdName[k]}</b>
                        
                      </h6>
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        name={k}
                        onChange={(e) => {
                          // console.log(e, "ggggg");
                          onValueChange(e.target.name, e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            ))}

            <button
              type="submit"
              class="btn navi toolselect text-black"
              onClick={onSumitReturnTools}
            >
              <b class="navbutton">submit</b>
            </button>
            <ToastContainer />
          {/* </form> */}
        </ModalBody>
      </Modal>
    </div>
  );
}
