import React from 'react'
import './Header.css'
import { CiSearch } from "react-icons/ci";
import { TbMenuDeep } from "react-icons/tb";

const Header = () => {
  return (
    <div className='header'>
        <div className="header-links">
            <div className="search">
                <input type="text" placeholder='Search' />
                <CiSearch className='search-icon' />
            </div>
            <button>Customer Login</button>
        </div>
        <div className="menu">
          <TbMenuDeep />
        </div>
        <div className="header-text">
          <h1>InnKey PMS For Resorts - Hospitality Management Made Easy</h1>
          <p>A comprehensive suite of hospitality software products that help you manage your hotel operations so that you can focus on your customers</p>
          <button>Request a Demo</button>
        </div>
    </div>
  )
}

export default Header
