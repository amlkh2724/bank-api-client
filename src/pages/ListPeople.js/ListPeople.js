import React from 'react'
import './ListPeople.css'
import GitAllPeople from '../../components/GitAllPeople'
import { Link } from 'react-router-dom'

 const ListPeople = () => {
  return (
    <div className='backgroundbank'>
      <div className='footer'>
      <Link className='designsignup' to='/signUp'>create user</Link>
      </div>
      <GitAllPeople></GitAllPeople>
    </div>
  )
}
export default ListPeople