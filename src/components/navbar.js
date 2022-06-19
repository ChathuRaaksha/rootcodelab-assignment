import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function 
() {

  const  state=useSelector((state)=>state.handleCart)
  return (

    <div class='container'>
     <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm ">
  <a class="navbar-brand fw-bold fs-4" href="#">LA COLLECTION</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Contact</a>
      </li>
    </ul>
        <div className='buttons'>
            <NavLink to='/cart' className='btn btn-outline-dark ms-2'>
                <i className='fa fa-shopping-cart me-1'>Cart ({state.length})</i>
            </NavLink>
        </div>


  </div>
</nav>
    </div>
  )
}
