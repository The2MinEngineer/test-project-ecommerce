import React from 'react'
import './Navbar.css'
import Logo from '/Logo2.svg'
import Community from '/Community.svg'
import {Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faCircleQuestion, faCartShopping} from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  return (
   <header>
    <nav>
    <div className='navbar'>
  

<div  className='logo'>
  <Link> <img src={Logo} alt="LOGO IMAGE" width="187px" height="60px"></img> </Link>

</div>


<div className='nav-menu'>
  <ul>
    <li>
      <NavLink to="/" className="nav-links">Home</NavLink>
    </li>
    <li>
      <NavLink to="about" className="nav-links">About</NavLink>

    </li>
    <li>
      <NavLink to="contact" className="nav-links">Contact</NavLink>
    </li>

  </ul>

</div>

<div className='input-wrapper'>

  <input type='search' placeholder='search' />
  <FontAwesomeIcon icon={faMagnifyingGlass} id='search-icon' />
 

</div>


<div className='nav-icons'>
<FontAwesomeIcon icon={faCircleQuestion}  className='icon question'/>
<img src={Community} alt="community"></img>
<FontAwesomeIcon icon={faCartShopping} className='icon cart' />

</div>


    </div>
    </nav>
   </header>
  )
}
