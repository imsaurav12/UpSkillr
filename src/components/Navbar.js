import React from 'react'
import toast from 'react-hot-toast'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to="/">
        <img src={logo} alt='logo' width={160} height={32} loading='lazy'></img>
      </Link>

      <nav > 
        <ul className='flex gap-x-6 text-white '>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Button- Login,SignUp,Logout,Dashboard */}
      <div className='flex items-center gap-x-4'>
        { !isLoggedIn && 
          <Link to='/login'>
            <button className='bg-emerald-600 hover:bg-emerland-700 text-white py-2 px-4 
            rounded-lg border border-white/20 hover:border-white transition duration-200'>
              Log In
            </button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to='/signup'>
            <button className='bg-emerald-600 hover:bg-emerland-700 text-white py-2 px-4 
            rounded-lg border border-white/20 hover:border-white transition duration-200'>
              Sign Up
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to='/dashboard'>
            <button className='bg-emerald-600 hover:bg-emerland-700 text-white py-2 px-4 
            rounded-lg border border-white/20 hover:border-white transition duration-200'>
              Dashboard
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to='/'>
            <button className='bg-emerald-600 hover:bg-emerland-700 text-white py-2 px-4 
            rounded-lg border border-white/20 hover:border-white transition duration-200'
              onClick={()=>{
              setIsLoggedIn(false);
              toast.success("Logged Out")
              }}>
                Log Out
            </button>
          </Link>
        }
        
      </div>
    </div>
  )
}

export default Navbar
