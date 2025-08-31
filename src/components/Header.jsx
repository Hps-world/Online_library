import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <h1 className="logo">Online Library</h1>
        <nav className="nav">
          <NavLink to="/" end className={({isActive})=> isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/books/all" className={({isActive})=> isActive ? 'active' : ''}>Browse Books</NavLink>
          <NavLink to="/add" className={({isActive})=> isActive ? 'active' : ''}>Add Book</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
