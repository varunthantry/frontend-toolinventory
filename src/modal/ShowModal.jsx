import { useEffect } from "react";
// import ReactDOM from "react-dom";
import "./Modal.css"


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
    useEffect(()=>{
        document.body.style.overflowY= "hidden";
        return () => {
            document.body.style.overflowY= "scroll";
        };
    },[])
  
    return(
        
        <>
        
            <div className="modal-wrapper" onClick={props.closeApproval}></div>
            <div className="modal-container">
                <h2>{props.name}</h2>
                <p>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                perferendis suscipit officia recusandae, eveniet quaerat assumenda
                id fugit, dignissimos maxime non natus placeat illo iusto!
                Sapiente dolorum id maiores dolores? Illum pariatur possimus
                quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                placeat tempora vitae enim incidunt porro fuga ea. */}
                Operator is asking for {props.name} - {props.unit} Units
                
                </p>
                
  
            <button className='mx-2 modal-btn' onClick={props.closeApproval}>Accept</button>
            <button className="modal-btn" onClick={props.closeApproval}>Decline</button>
            </div>
        </>
        
    );
  };

export default Myapproval;