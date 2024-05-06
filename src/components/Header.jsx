import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  return (

     <header className='bg-slate-300 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
    <h1 className='font-bold text-sm sm:text-xl flex-wrap'>
        <span className='text-slate-700'>LENCO</span>
        <span className='text-slate-900'>REALTY</span>
    </h1>
    </Link>
    <form  className='bg-slate-100 p-3 rounded-lg flex items-center'>
<input type="text" placeholder='Search...' 
//  responsiveness for diferrent devices
className='bg-transparent focus: outline-none w-24 sm:w-64' /> 
{/* using react icons on my search form */}
<FaSearch className='text-slate-500'/>
    </form>
    <ul className='flex gap-4'>
    <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <Link to='/agent-info'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
            AgentInfo
            </li>
          </Link>
          <Link to='/profile'>
             {/* Conditional rendering based on whether a user is logged in */}
            {currentUser ? (
                // Render user's avatar if logged in
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
                // Render a sign-in link if not logged in
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>

    </ul>
    </div>
   </header>
  
  )
}
