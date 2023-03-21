import React,{useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

export default function EditManager() {
  // let navigate = useNavigate();

  //   const {id} = useParams();

  //   const [user, setUser] = useState({
  //     name:"",
  //     username: "",
  //     password: ""
  //   })

  //   const [name, username, password] = user;

  //   useEffect(()=>{
  //     loadUser();
  //   }, [])

  //   const loadUser = ()=>{
  //       const result = 
  //       setUser(result.data);
  //   }

  return (
    <div className='container my-5 pt-5'>
      <form>
        <div class="form-group row">
          <label for="inputId3" class="col-sm-2 col-form-label">Id</label>
          <div class="col-sm-10">
            <input type="id" 
            class="form-control" 
            id="inputId3" 
            placeholder="Id" 
            name="id"

            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="name"
             class="form-control" 
             id="inputName3" 
             placeholder="Name" 
             name="name"
            //  value={name}
             />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
          <div class="col-sm-10">
            <input type="username" 
            class="form-control" 
            id="inputUsername3" 
            placeholder="Username" 
              // value={username}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" 
            class="form-control" 
            id="inputPassword3" 
            placeholder="Password" 
            name="password" 
              // value={password}
            />
          </div>
        </div>
      
        <div class="form-group row my-5">
          {/* <div class="col-sm-10"> */}
          <div>
            <button type="submit" class="btn btn-danger mx-2">Cancel</button>
         
            <button type="submit" class="btn btn-primary mx-2">Edit</button>
          </div>
        </div>
    </form>
  
    </div>
  )
}
