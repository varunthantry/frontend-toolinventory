import React from 'react'

export default function AddManager() {
  return (
    <div className='container my-5'>
      <form>
        <div class="form-group row">
          <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="name" class="form-control" id="inputName3" placeholder="Name" />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
          </div>
        </div>
      
        <div class="form-group row my-5">
          {/* <div class="col-sm-10"> */}
          <div>
            <button type="submit" class="btn btn-danger mx-2">Cancel</button>
            <button type="submit" class="btn btn-primary mx-2">Add</button>
          </div>
        </div>
    </form>
  
    </div>
  )
}
