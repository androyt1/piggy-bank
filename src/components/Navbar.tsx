import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center h-[70px] sticky top-0 bg-indigo-700 px-3'>
        <div className='text-xl md:text-2xl font-bold'>
            <Link to="/"><h4 className='text-white'>Bank</h4></Link>
        </div>
        <ul className='flex'>
           <li className='text-white mr-3'><Link to="/">Home</Link></li>          
           <li className='text-white mr-3'><Link to="/operations">Operations</Link></li>
        </ul>
    </nav> 
  )
}
 
export default Navbar 