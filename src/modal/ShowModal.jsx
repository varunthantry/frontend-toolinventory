import { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import "./Modal.css";
import {
  postRejectRequest,
  postApproveRequest,
} from "../services/AllManagerApproval";
import Loader from "../Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

// const Myapproval = ({closeApproval}) => {
//     useEffect(()=>{
//         document.body.style.overflowY= "hidden";
//         return () => {
//             document.body.style.overflowY= "scroll";
//         };
//     },[])

//     return(

//         <>

//             <div className="modal-wrapper" onClick={closeApproval}></div>
//             <div className="modal-container">
//                 <h2>Hammer</h2>
//                 <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
//                 perferendis suscipit officia recusandae, eveniet quaerat assumenda
//                 id fugit, dignissimos maxime non natus placeat illo iusto!
//                 Sapiente dolorum id maiores dolores? Illum pariatur possimus
//                 quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
//                 placeat tempora vitae enim incidunt porro fuga ea.

//                 </p>

//             <button className='mx-2 modal-btn' onClick={closeApproval}>Accept</button>
//             <button className="modal-btn" onClick={closeApproval}>Decline</button>
//             </div>
//         </>

//     );
// };

const Myapproval = (props) => {
  const data = props.data;

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    console.log(data);
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const ApproveRequest = (id) => {

    setLoader(false);
    postApproveRequest(id)
      .then((res) => {
        props.closeApproval();
        toast.info("Successfully Approved Request 👍");
        console.log("successfully Approved Request");
      })
      .catch((err) => {
        console.log("erroor login", err);
        toast.info("Error Occured");
      })
      .finally(()=>{
        setLoader(true);

      })
  };

  const RejectRequest = (id) => {

    setLoader(false);
    postRejectRequest(id)
      .then((res) => {
        props.closeApproval();

        toast.info("Successfully Rejected Request 👍");
        console.log("successfully Rejected Request");
      })
      .catch((err) => {
        console.log("erroor login", err);
        toast.info("Error Occured");
      })
      .finally(()=>{
        setLoader(true);

      })
  };

  return (
    <>

{loader ? (

    <div>
      <div className="modal-wrapper" onClick={props.closeApproval}></div>
      <div className="modal-container">
        <h2>{data.userName}</h2>
        <p>
         
          Operator {data.userName} is asking for <br />
          {Object.keys(data?.toolTypeNameAndUnits).map((k) => (
                      <c>
                        {k + " : " + data?.toolTypeNameAndUnits[k]} <br />
                      </c>
          ))}
        </p>

            
        
        
        <button className="modal-btn" onClick={() => RejectRequest(data.id)}>
          Decline
        </button>

        <button
          className="mx-2 modal-btn"
          onClick={() => ApproveRequest(data.id)}
        >
          Accept
        </button>
        <ToastContainer />
      </div>
      </div>

      ) : (
       <Loader />
      )}
    </>
  );
};

export default Myapproval;
