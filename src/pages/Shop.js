import React from 'react'
import bg2 from '../image/bg2.jpg'
import m1 from '../image/m1.jpg'
import t2 from '../image/t2.jpg'
import t3 from '../image/t3.jpg'
import c5 from '../image/c5.jpg'
import c4 from '../image/c4.jpg'
import c7 from '../image/c7.jpg'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import './Shop.css'
import { Navbar } from 'reactstrap'
import Footer from './Footer'
const Shop = () => {
    return (
        
        <div>
           
            <div className="o1">
                <img src={bg2} />
                <p className="ho">Shop Sidebar</p>

                <p className="roboto-o1">Home > Shop</p>
            </div>


            <div className='o2'>
                <div className='oc1'>
                    <p className='op1'>Search</p>
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <p className='op2'>Menu Categories</p>
                    <div className='menu'>
                        <div className='op3'>
                            <p >Birthday Boqutets</p>
                            <p >Funeral Flowers</p>
                            <p >Interior Decor</p>
                            <p >Custom Orders</p>
                        </div>
                        <div className='plus'>
                            <h2>+</h2>
                            <h2>+</h2>
                            <h2>+</h2>
                            <h2>+</h2>


                        </div>
                    </div>

                    <p className='op2'>Categories</p>
                    <div className='op3'>
                        <p >All Product</p>
                        <p >Best Seller (5)</p>
                        <p >Featured (4)</p>
                        <p >New Products (6)</p>
                    </div>

                    <p className='op2'>Color</p>



                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                            black (20)
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                            red (6)
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                            blue (8)
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                            green (5)
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                            pink (4)
                        </label>
                    </div>

                    <p className='op2'>Tags</p>
                    <div>

                        <input class="op4" type="button" value="Rose"></input>
                        <input class="op4" type="submit" value="Sunflower"></input>
                        <input class="op4" type="reset" value="tulib"></input>
                    </div>
                    <div>
                        <input class="op5" type="button" value="Lily"></input>
                        <input class="op5" type="submit" value="Smart"></input>
                        <input class="op5" type="reset" value="Mordern"></input>
                    </div>
                    <input class="op5" type="button" value="Gift"></input>

                    <p className='op2'>Recent Products</p>
                    <div>

                    </div>
                </div>
                <div className='oc2'>
                    <div class="op5">
                        <div class="collapse" id="navbarToggleExternalContent">
                            <div class="bg-dark p-4">
                                <h5 class="text-white h4">Collapsed content</h5>
                                <span class="text-muted">Toggleable via the navbar brand.</span>
                            </div>
                        </div>
                        <nav class="navbar navbar-dark bg-dark">
                            <div class="container-fluid">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </nav>
                    </div>


                    <div className='op6'>
                        <div class="card41">
                            <img src={m1} />
                            <div class="card-body41">
                                <h5 class="card-title">Flowers daisy pink stick</h5>
                                <div className='star1'>
                                    <FaStarHalfAlt /><FaStarHalfAlt /><FaStarHalfAlt /><FaRegStar /><FaRegStar />
                                </div>


                                <p class="card-text">$80.00 </p>

                            </div>
                        </div>


                        <div class="card41">
                            <img src={t2} />
                            <div class="card-body41">
                                <h5 class="card-title">Jasmine flowers white</h5>
                                <div className='star1'>
                                    <FaStarHalfAlt /><FaStarHalfAlt /><FaStarHalfAlt /><FaRegStar /><FaRegStar />
                                </div>


                                <p class="card-text">$80.00 </p>

                            </div>
                        </div>

                        <div class="card41">
                            <img src={t3} />
                            <div class="card-body41">
                                <h5 class="card-title">Blossom bouquet flower</h5>
                                <div className='star1'>
                                    <FaStarHalfAlt /><FaStarHalfAlt /><FaStarHalfAlt /><FaRegStar /><FaRegStar />
                                </div>


                                <p class="card-text">$80.00 </p>

                            </div>
                        </div>

                    </div>



                    <div className='op6'>
                        <div class="card41">
                            <img src={c5} />
                            <div class="card-body41">
                                <h5 class="card-title">Flowers daisy pink stick</h5>
                                <div className='star1'>
                                    <FaStarHalfAlt /><FaStarHalfAlt /><FaStarHalfAlt /><FaRegStar /><FaRegStar />
                                </div>


                                <p class="card-text">$80.00 </p>

                            </div>
                        </div>


                        <div class="card41">
                            <img src={c4} />
                            <div class="card-body41">
                                <h5 class="card-title">Jasmine flowers white</h5>
                                <div className='star1'>
                                    <FaStarHalfAlt /><FaStarHalfAlt /><FaStarHalfAlt /><FaRegStar /><FaRegStar />
                                </div>


                                <p class="card-text">$80.00 </p>

                            </div>
                        </div>

                        <div class="card41">
                            <img src={c7} />
                            <div class="card-body41">
                                <h5 class="card-title">Blossom bouquet flower</h5>
                                <div className='star1'>
                                    <FaStarHalfAlt /><FaStarHalfAlt /><FaStarHalfAlt /><FaRegStar /><FaRegStar />
                                </div>


                                <p class="card-text">$80.00 </p>

                            </div>
                        </div>

                    </div>

                    <div className='op6'>
                        <div class="card41">
                            <img src={c7} />
                            <div class="card-body41">
                                <h5 class="card-title">Flowers daisy pink stick</h5>
                                <div className='star1'>
                                    <FaStarHalfAlt /><FaStarHalfAlt /><FaStarHalfAlt /><FaRegStar /><FaRegStar />
                                </div>


                                <p class="card-text">$80.00 </p>

                            </div>
                        </div>


                        <div class="card41">
                            <img src={c5} />
                            <div class="card-body41">
                                <h5 class="card-title">Jasmine flowers white</h5>
                                <div className='star1'>
                                    <FaStarHalfAlt /><FaStarHalfAlt /><FaStarHalfAlt /><FaRegStar /><FaRegStar />
                                </div>


                                <p class="card-text">$80.00 </p>

                            </div>
                        </div>

                        <div class="card41">
                            <img src={t2} />
                            <div class="card-body41">
                                <h5 class="card-title">Blossom bouquet flower</h5>
                                <div className='star1'>
                                    <FaStarHalfAlt /><FaStarHalfAlt /><FaStarHalfAlt /><FaRegStar /><FaRegStar />
                                </div>


                                <p class="card-text">$80.00 </p>

                            </div>
                        </div>

                    </div>

                </div>













            </div>
            
        </div>
    )
}

export default Shop