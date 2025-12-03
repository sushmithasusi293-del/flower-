import React from 'react'
import bg2 from '../image/bg2.jpg'
import './Contectus.css'
import { CiLocationOn } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
const Contectus = () => {
    return (
        <div>
            <div className="o1">
                <img src={bg2} />
                <p className="ho">Shop Sidebar</p>

                <p className="roboto-o1">Home > Shop</p>
            </div>


            <div className='o22'>
                <div className='oc'>
                    <div className='boxx'>
                        <div className='loc'><CiLocationOn /></div>
                        <div className='loc1'>
                            <h5>Our Location</h5>
                            <p>(800) 123 456 789 / (800) 123 456 789</p>
                            <p>info@example.com</p>
                        </div>

                    </div>
                </div>
                <div className='oc1'>
                    <div className='boxx1'>
                        <div className='loc'><IoIosPhonePortrait /></div>
                        <div className='loc1'>
                            <h5>Contact us Anytime</h5>
                            <p>Mobile: 012 345 678</p>
                            <p>Fax: 123 456 789</p>
                        </div>
                    </div>

                </div>
                <div className='oc2'>
                    <div className='boxx2'>
                        <div className='loc'><AiOutlineMail /></div>
                        <div className='loc1'>
                            <h5>Support Overall</h5>
                            <p>Support24/7@example.com</p>
                            <p>info@example.com</p>
                        </div>
                    </div>
                </div>
            </div>




            <div className='oc3'>

                <div className='oc4'>
                    <h4>Get in Touch</h4>
                    <div className='text'>
                        <form>
                            <input type='text' placeholder='Name'></input>
                            <input type='text' placeholder='Subject'></input>
                            <input type='text' placeholder='Massage'></input>
                        </form>
                    </div>

                </div>
                <div className='oc5'>
                    <div className='text1'>
                        <form>
                            
                            <input type='text' placeholder='Email'></input>
                        </form>
                    </div>
                </div>
               
            </div>
            
             <button className='btn'>Send A Massage</button>
        </div>
    )
}

export default Contectus