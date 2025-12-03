import React from 'react'
import './Footer.css'
import g1 from '../image/g1.jpg'
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <div class="f11">
        <div class="g1">
          <img src={g1} />
          <p>Lorem Khaled Ipsum is a major key to success. To be successful you’ve got to work hard you’ve got to make it.</p>
          <div class="facebook"><FaFacebook /><AiFillTwitterCircle /><FaLinkedin /><TiSocialYoutubeCircular /></div>


        </div>
        <div class="g2">
          <h3>Information</h3>
          <p>Our Company</p>
          <p>Contact Us</p>
          <p>Our Services</p>
          <p>Why We?</p>
          <p>Careers</p>
        </div>
        <div class="g3">
          <h3>Quicklink</h3>
          <p>About</p>
          <p>Blog</p>
          <p>Shop</p>
          <p>Cart</p>
          <p>Contact</p>
        </div>
        <div class="g4">
          <h3>Support</h3>
          <p>Online Support</p>
          <p>Shipping Policy</p>
          <p>Return Policy</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div class="g5">
          <h3>See Information</h3>
          <p>123, ABC, Road ##, Main City, Your</p>
          <p>address goes here.</p>
          <p>Phone: 01234 567 890</p>
          <p>Email: https://example.com</p>

        </div>
      </div>


      <div class="f12">
        <p>Copyright © 2021 HasThemes | Built with FloSun by HasThemes.</p>
      </div>
    </div>
  )
}

export default Footer