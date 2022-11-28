import React from 'react'
import '../App.css'

import imageLogo from '../Images/logo1.png'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import GradeIcon from '@mui/icons-material/Grade'
import ListIcon from '@mui/icons-material/List'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebarList'>
        <li className='row' style={{ height: '250px' }}>
          <img src={imageLogo} alt='broken' />
        </li>
        <li className='row text-center text-light'>
          {' '}
          <h3>AP's Songs</h3>{' '}
        </li>
        <li className='row'>
          <div>
            <Link className='nav-link text-light' to='/Home'>
              <HomeIcon />
              Home
            </Link>
          </div>
        </li>

        <li className='row'>
          <div>
            <Link className='nav-link text-light' to='/Search'>
              <SearchIcon />
              Search
            </Link>
          </div>
        </li>

        <li className='row'>
          <div>
            <Link className='nav-link text-light' to='/Favourites'>
              <GradeIcon />
              Favourites
            </Link>
          </div>
        </li>

        <li className='row'>
          <div>
            <Link className='nav-link text-light' to='/Playlist'>
              <ListIcon />
              Playlist
            </Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
