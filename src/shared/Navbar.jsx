 import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
 

    const list = 
    <>
    
       
       <div className='grid grid-cols-3 '>
        <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
       </div>
    
    </>
    return (
        <div className='mx-4'>


            <div className="navbar  fixed z-10 bg-opacity-50 bg-red-800">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
        <ul tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" >


          {list}
        </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" >

          
          {list}
        </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
            

        </div>
    );
};

export default Navbar;