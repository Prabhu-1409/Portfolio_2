import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='container-header'>
      <ul>
        <li>
          <Link to='/'><a href='/'>Home</a></Link>
        </li>
        <li>
          <Link to='/About'><a href='About'>About Me</a></Link>
        </li>
        <li>
           <Link to='/Contact'><a href='Contact'>Contact Me</a></Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
