import React from 'react';
import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className='nav-bar'>
            <ul><a className='nav-link' href='/home'>Home</a></ul>
            <ul><a className='nav-link' href='/governmentjobs'>Government Jobs</a></ul>
            <ul><a className='nav-link' href='/privatejobs'>Private Jobs</a></ul>
            <ul><a className='nav-link' href='/special'>Special</a></ul>
            <ul><a className='nav-link' href='/contact-us'>Contact Us</a></ul>
            </div>
        </div>
    )
}

export default Navbar;