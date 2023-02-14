import React from 'react'
import "./styles/UserCard.css";

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }

  return (
    <article className='usercar_colorc'>
    <h3>{user.first_name} {user.last_name}</h3>
    <hr />
    <ul >
      <li><span>Email: </span>{user.email}</li>
      <li><span className='bx bx-gift' >Birthday: </span>{user.birthday}</li>
    </ul>
    <hr /> 
    <footer className='usercar_foot'>
      <button onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
      <button onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>
    </footer>
  </article>
  )
}

export default UserCard