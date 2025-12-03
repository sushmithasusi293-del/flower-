import React from 'react'
import i2 from '../image/i2.jpg'
import './Home.css'
import i3 from '../image/i3.jpg'
import i4 from '../image/i4.jpg'
import i5 from '../image/i5.jpg'
import k1 from '../image/k1.jpg'
import k2 from '../image/k2.jpg'
import k3 from '../image/k3.jpg'
import m1 from '../image/m1.jpg'
import c2 from '../image/c2.jpg'
import c3 from '../image/c3.jpg'
import c4 from '../image/c4.jpg'
import c5 from '../image/c5.jpg'
import c6 from '../image/c6.jpg'
import c7 from '../image/c7.jpg'
import bg from '../image/bg.jpg'
import t1 from '../image/t1.jpg'
import t2 from '../image/t2.jpg'
import t3 from '../image/t3.jpg'
import z1 from '../image/z1.jpg'
import z2 from '../image/z2.jpg'
import f5 from '../image/f5.jpg'
import z3 from '../image/z3.jpg'
import kk1 from '../image/kk1.jpg'
import kk2 from '../image/kk2.jpg'
import kk3 from '../image/kk3.jpg'
import d1 from '../image/d1.jpg'
import d2 from '../image/d2.jpg'
import d3 from '../image/d3.jpg'
import d4 from '../image/d4.jpg'
import d5 from '../image/d5.jpg'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import Footer from './Footer'
const Home = () => {


    return (
        <div>
            <div className='three'>

                <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">

                            <img src={i2} />

                            <div class="carousel-caption1 ">
                                <button >TOP TREND</button>
                                <h6>2022 Flower World</h6>

                                <p>Lerom ipsum dolor sit amet ,pri autem nemore bonorum te.</p>
                                <p>fierent ullamcopper ius no,nec ea quodsi invire</p>
                                <button className='two'>Shop Now</button>
                            </div>

                        </div>
                        <div class="carousel-item">
                            <img src={i3} />
                            <div class="carousel-caption1">
                                <button id="btn">COLLECTION</button>
                                <h6 >Folwer And cantle </h6>
                                <h6 className='u'>brithday gift</h6>

                                <p>Lerom ipsum dolor sit amet ,pri autem nemore bonorum te.</p>
                                <p>fierent ullamcopper ius no,nec ea quodsi invire</p>
                                <button className='two'>Shop Now</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={i2} />
                            <div class="carousel-caption1">
                                <button>TOP TREND</button>
                                <h6>2022 Flower World</h6>

                                <p>Lerom ipsum dolor sit amet ,pri autem nemore bonorum te.</p>
                                <p>fierent ullamcopper ius no,nec ea quodsi invire</p>
                                <button className='two'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <div class="rr1">
                <div class="cc1">
                    <div class="card w-75 border border-white">
                        <div class="card-bodyy">
                            <img src={i4} />
                            <a href="#" class="btn btn-primary">plotted plant 18 items</a>
                        </div>
                    </div>
                </div>
                <div class="cc2">
                    <div class="cr1">
                        {/* <img className='i1' src={i5} />
                        <img className="k1" src={k1} /> */}
                        <div class="card w-75 border border-white">
                            <div class="card-body111">
                                <img className='i1' src={i5} />
                                <a href="#" class="btn btn-primary">plotted plant 18 items</a>
                            </div>
                        </div>
                        <div class="card w-75 border border-white">
                            <div class="card-body0001">
                                <img className='i1' src={k1} />
                                <a href="#" class="btn btn-primary">plotted plant 18 items</a>
                            </div>
                        </div>

                    </div>
                    <div class="cr2">
                        <div class="card w-75 border border-white">
                            <div class="card-body0002">
                                <img className='i1' src={k2} />
                                <a href="#" class="btn btn-primary">plotted plant 18 items</a>
                            </div>
                        </div>
                        <div class="card w-75 border border-white">
                            <div class="card-body02">
                                <img className='i1' src={k3} />
                                <a href="#" class="btn btn-primary">plotted plant 18 items</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row3'>
                <i className='para'>worderful gift</i>
                <p className='parag'>FEATURED PRODUCTS</p>
            </div>


            <div className='f1'>
                <div class="fc1">
                    <div class="card1">
                        <img src={m1} />
                        <div class="card-body9">
                            <h5 class="card-title">Flower daisy pink stick</h5>
                            <FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStar /><FaRegStar />
                            <p class="card-text">$80.00 </p>
                        </div>
                    </div>

                </div>
                <div className='fc2'>
                    <div class="card2">
                        <img src={c2} />
                        <div class="card-body8">
                            <h5 class="card-title">Bolssom boquet flower</h5>
                            <FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStar /><FaRegStar />
                            <p class="card-text">$80.00 </p>
                        </div>
                    </div>
                </div>
                <div className='fc3'>
                    <div class="card2">
                        <img src={c3} />
                        <div class="card-body8">
                            <h5 class="card-title">Rose boquet white</h5>
                            <FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStar /><FaRegStar />
                            <p class="card-text">$80.00 </p>
                        </div>
                    </div>
                </div>
                <div className='fc4'>
                    <div class="card2">
                        <img src={c4} />
                        <div class="card-body8">
                            <h5 class="card-title">Glory of the snow</h5>
                            <FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStar /><FaRegStar />
                            <p class="card-text">$80.00 </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='f1'>
                <div class="fc1">
                    <div class="card1">
                        <img src={c5} />
                        <div class="card-body9">
                            <h5 class="card-title">Jasmine flower white</h5>
                            <FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStar /><FaRegStar />
                            <p class="card-text">$80.00 </p>
                        </div>
                    </div>

                </div>
                <div className='fc2'>
                    <div class="card2">
                        <img src={c6} />
                        <div class="card-body8">
                            <h5 class="card-title">Orchid flower red stick</h5>
                            <FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStar /><FaRegStar />
                            <p class="card-text">$80.00 </p>
                        </div>
                    </div>
                </div>
                <div className='fc3'>
                    <div class="card2">
                        <img src={c7} />
                        <div class="card-body8">
                            <h5 class="card-title">Hyacinth white strick</h5>
                            <FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStar /><FaRegStar />
                            <p class="card-text">$80.00 </p>
                        </div>
                    </div>
                </div>
                <div className='fc4'>
                    <div class="card2">
                        <img src={c4} />
                        <div class="card-body8">
                            <h5 class="card-title">Jack in the pulpit</h5>
                            <FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStar /><FaRegStar />
                            <p class="card-text">$80.00 </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="f2">
                <img src={bg} />
                <h1>DEAL OF THE DAY</h1>
                <p>02:25:30:02</p>
            </div>



            <div class="f3">
                <div class="t1">
                    <div class="card01">
                        <img src={t1} />
                        <div class="card-body01">
                            <h5 class="card-title">Flower pink strick</h5>
                            <FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStar /><FaRegStar />
                            <p class="card-text">$80.00 </p>
                        </div>
                    </div>
                </div>
                <div class="t2">
                    <div class="card02">
                        <img src={t2} />
                        <div class="card-body01">
                            <h5 class="card-title">Flower pink strick</h5>
                            <FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStar /><FaRegStar />
                            <p class="card-text">$80.00 </p>
                        </div>
                    </div>
                </div>
                <div class="t3">
                    <div class="card03">
                        <img src={t3} />
                        <div class="card-body01">
                            <h5 class="card-title">Flower pink strick</h5>
                            <FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStarHalfStroke /><FaRegStar /><FaRegStar />
                            <p class="card-text">$80.00 </p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="f4">
                <p className='n1'>A little Story About Us</p>
                <p className='n2'>Our History</p>
                <p className='n3'>Captain America: Civil War Christopher Markus and Stephen McFeely see the
                </p>
                <p className='n4'>Hulk as the game over moment.</p>
                <p className='n5'>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod</p>
                <p className='n6'>mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis</p>
                <p className='n7'>qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii</p>
                <p className='n8'>legunt saepius. Claritas est etiam processus dynamicus. Phasellus eu rhoncus dolor, vitae</p>
                <p className='n9'>scelerisque sapien</p>
            </div>


            <div class="f5">
                <div class="z1">
                    <img src={z1} />
                </div>
                <div class="z2">
                    <img src={z2} />
                </div>
                <div class="z3">
                    <img src={z3} />
                </div>
            </div>


            <div class="f6">
                <p className='ee1'>We Love Our Clients
                </p>
                <p className='ee2'>What They’re Saying</p>
                <img src={f5} />
                <p className='n5'>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod</p>
                <p className='n6'>mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis</p>
                <p className='n7'>qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii</p>
                <p className='n8'>legunt saepius. Claritas est etiam processus dynamicus. Phasellus eu rhoncus dolor, vitae</p>
                <p className='n9'>scelerisque sapien</p>
                <p className='ee3'>karthirin suliven</p>
            </div>


            <div class="f7">
                <div class="v1">
                    <h3>SEND NEWSLETTER</h3>
                    <p>Enter Your Email Address For Our Mailing List To Keep Your Self Update</p>
                </div>
                <div class="v2">
                    <from>
                        <input type='text' placeholder='email'></input>
                        <button >subcribe</button>
                    </from>
                </div>
            </div>


            <div class="f8">
                <p className='j1'>From The Blogs</p>
                <p className='j2'>Our Latest Posts</p>
            </div>


            <div class="f9">
                <div class='k1'>
                    <div class="card03">
                        <img src={kk1} />
                        <div class="card-body03">
                            <h3 class="card-title">Standard blog post One</h3>
                            <h6>By admin December ->18, 2022</h6>
                            <p class="card-text">Lorem ipsu dolor sit amet cons  .</p>
                            <p>umque adipisicing, sed do incid</p>
                            <p>eiusmod tempor ut labore et dolore</p>
                            <p>eveniet .</p>
                        </div>
                    </div>
                </div>
                <div class="k2">
                    <div class="card03">
                        <img src={kk2} />
                        <div class="card-body03">
                            <h3 class="card-title">New Collection Two</h3>
                            <h6>By admin December-> 18, 2022</h6>
                            <p class="card-text">Lorem ipsu dolor sit amet cons  .</p>
                            <p>umque adipisicing, sed do incid</p>
                            <p>eiusmod tempor ut labore et dolore</p>
                            <p>eveniet .</p>

                        </div>
                    </div>
                </div>
                <div class="k3">
                    <div class="card03">
                        <img src={kk3} />
                        <div class="card-body03">
                            <h3 class="card-title">Standard blog post three</h3>

                            <h6>By admin December-> 18, 2022</h6>
                            <p class="card-text">Lorem ipsu dolor sit amet cons  .</p>
                            <p>umque adipisicing, sed do incid</p>
                            <p>eiusmod tempor ut labore et dolore</p>
                            <p>eveniet .</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="f10">
                <div class="d1">
                    <img src={d1} />
                </div>
                <div class="d2">
                    <img src={d2} />
                </div>
                <div class="d3">
                    <img src={d3} />
                </div>
                <div class="d4">
                    <img src={d4} />
                </div>
                <div class="d5">
                    <img src={d5} />
                </div>
            </div>
        </div>



    )

  
}

export default Home