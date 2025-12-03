import React from 'react'
import il from '../image/i1.jpg'

import './Navbar.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div class="Navv">
                <div class="b1">

                </div>
            </div>

            <div className="row">
                <div class="col1">
                    <img src={il} />
                </div>
                <div class="col2">
                    <ul>

                        <Link to='/'><li>Home</li></Link>
                        <Link to='/shop'><li>Shop</li></Link>
                        <Link to='/blog'><li>Blog</li></Link>
                        <Link to='/blog'><li>Pages</li></Link>
                        <Link to='/about'><li>AboutUs</li></Link>
                        <Link to='/contectus'><li>Contact</li></Link>
                    </ul>
                </div>
                <div class="col3">

                    <div class="c1">

                        <FaCartShopping />
                    </div>
                    <div class="c2">
                        <FaSearch />
                    </div>
                    <div class="c3">
                        <MdOutlineMenu />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar