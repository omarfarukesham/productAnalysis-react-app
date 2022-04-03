import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div className='d-flex justify-content-center align-items-center fs-3 bg-light'>
            <CustomLink  className='m-2 text-black'  to="/">Home</CustomLink>
            <CustomLink  className='m-2 text-black'  to='/Review'>Review</CustomLink>
            <CustomLink  className='m-2 text-black ' to='/Dashboard'>Dashboard</CustomLink>
            <CustomLink  className='m-2 text-black' to='/Blogs'>Blogs</CustomLink>
            <CustomLink  className='m-2 text-black ' to='/Login'>Login</CustomLink>
        </div>
    );
};

export default Navbar;