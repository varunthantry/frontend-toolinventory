import React from 'react'

export default function Navbar() {
  return (
    <div class="container">
    <nav class=" navbar-expand-lg navbar-light bg-primary fixed-top    ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse " id="navbarExample01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link " aria-current="page" href="/Admin"><p class="text-white">Home</p></a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="/Admin"><p class="text-white">All Manager</p></a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#"><p class="text-white">Ledger</p></a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}
