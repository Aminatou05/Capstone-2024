import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


export default function Header() {
    // Get the currentUser from the Redux store
  const {currentUser} = useSelector(state => state.user)
    // Set up state for the search term
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();
// Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
     // Get the current URL search parameters
    const urlParams = new URLSearchParams(window.location.search);
     // Set the 'searchTerm' parameter to the current search term
    urlParams.set('serachTerm', searchTerm);
     // Convert the URLSearchParams object to a string
    const searchQuery = urlParams.toString();
     // Navigate to the search page with the updated search term in the query string
    navigate(`/search?${searchQuery}`);

    useEffect(() => {
  // Create a new URLSearchParams object based on the current location search string
  const urlParams = new URLSearchParams(location.search);
  // Get the value of the 'searchTerm' parameter from the URL
  const searchTermFromUrl = urlParams.get('searchTerm');
  // If a 'searchTerm' parameter exists in the URL, update the search term state with its value
  if (searchTermFromUrl) {
    setSearchTerm(searchTermFromUrl);
  }
}, [location.search]); // Run this effect whenever the location search string changes


  }
  return (
     // Render a form for submitting search queries

     <header className='bg-slate-300 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
    <h1 className='font-bold text-sm sm:text-xl flex-wrap'>
        <span className='text-slate-600'>LENCO</span>
        <span className='text-slate-900'>REALTY</span>
    </h1>
    </Link>
    <form  onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center'>
<input type="text" placeholder='Search...' 
//  responsiveness for diferrent devices
className='bg-transparent focus: outline-none w-24 sm:w-64'  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/> 

{/* using react icons on my search form */}
<button>
            <FaSearch className='text-slate-800' />
          </button>
    </form>
    <ul className='flex gap-4'>
    <Link to='/'>
            <li className='hidden sm:inline font-semibold text-xl text-slate-950 hover:underline'>
              Home
            </li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline font-semibold text-xl text-slate-950  hover:underline'>
              About
            </li>
          </Link>
          <Link to='/agent-info'>
            <li className='hidden sm:inline font-semibold text-xl text-slate-950  hover:underline'>
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
