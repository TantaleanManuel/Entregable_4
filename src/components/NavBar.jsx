import React from 'react'
import "./styles/NavBar.css";

const NavBar = ({handleClickShowModal}) => {

  return (
    <nav className='navbar'>
        <h1 className='navbar__title'>Usuarios</h1>
        <button className='navbar_btn' onClick={handleClickShowModal}><i className='bx bx-cross'></i>Create new user</button>
    </nav>
  )
}



export default NavBar

