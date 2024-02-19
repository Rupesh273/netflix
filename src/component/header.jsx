import "./Header.scss"
import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/netflix.png'
import { HiOutlineSearch } from "react-icons/hi";

 


function Header() {
  return (
    <nav className="header">
      
       <img src ={Logo} alt="" />
       <div>
        <Link to="/tvshow"> TvShow</Link>
        <Link to="/Movies"> Movies</Link>
        <Link to="/Recently Added"> Recently Added</Link>
        <Link to="/My List"> My List</Link>
       </div>
       <HiOutlineSearch />
    </nav>
  ) 
}

export default Header