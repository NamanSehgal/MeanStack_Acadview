import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <li className="brand-logo">Acadview</li>
                <ul class="right">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Form'>Form</Link></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;
