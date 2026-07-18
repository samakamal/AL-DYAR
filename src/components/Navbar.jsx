import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home';
import Products from './Products';
import { FaHeart, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';

function Navbar({ search, setSearch }) {
  return (
   <>
   <div className=' flex justify-center bg-black'>
    <h1 className=' text-amber-50 '>Sign up and get 20% off your first order!<a href='#'>SHOP NOW</a> </h1>
   </div>
   <nav className='flex justify-center gap-10'>
    <NavLink className='hover:text-blue-500' to='/' end>Home</NavLink>
    <NavLink className='hover:text-blue-500' to='/Products'>Products</NavLink>
     <NavLink className='hover:text-blue-500' to='/Womensclothing'>Women</NavLink>
      <NavLink className='hover:text-blue-500' to='/Mensclothing'>Men</NavLink>
       <NavLink className='hover:text-blue-500' to='/Jewelry'>Jewelry</NavLink>
        <NavLink className='hover:text-blue-500' to='/Electronics'>Electronics</NavLink>


    
    <div className='flex  items-end gap-10 p-2'>

      <FaSearch size={20} className=' hover:text-fuchsia-800 cursor-pointer' />
      <FaHeart  size={20} className=' hover:text-fuchsia-800 cursor-pointer'/>
      <FaShoppingBag  size={20} className=' hover:text-fuchsia-800 cursor-pointer'/>
      <FaUser  size={20} className=' hover:text-fuchsia-800  cursor-pointer'/>
    </div>
  
   </nav>
   </>
  )
}

export default Navbar;
