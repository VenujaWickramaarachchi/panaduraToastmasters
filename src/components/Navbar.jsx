import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-coolGrey via-fairGrey to-coolGrey '>
      <div className='navbar align-element '>
        <div className='navbar-start '>
          {/* TITLE */}
          <NavLink
            to='/'
            className='hidden md:flex btn btn-accent text-3xl items-center '
          >
            PTM
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost md:hidden'>
              <FaBarsStaggered className='h-6 w-6 ' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-end hidden md:flex'>
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
