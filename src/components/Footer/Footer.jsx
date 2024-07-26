import React from 'react'
import './Footer.css'
import { BsLinkedin } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container">
     <div className='footer-one'>
      <div className="first">
        <h4 className='blue-text'>INNKEY INFOSYSTEM PVT LTD.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam doloribus cum omnis at laborum sunt vero vel quod? Praesentium saepe amet ipsam atque minus rerum, debitis laudantium nulla non numquam excepturi esse, id architecto delectus unde sed itaque assumenda accusamus maxime, fuga ab! Molestiae corrupti nam ea aliquid maxime ipsum commodi nesciunt maiores eligendi, autem dolorum, doloribus quae iure aspernatur placeat iusto dicta ab facilis nulla impedit quas accusamus quisquam minima! Vel similique, molestiae eius vitae nemo voluptate optio? A!</p>
      </div>
      <div className="second">
        <h4>Quick Menue</h4>
        <a className='blue-text'>Home</a>
        <a>About Us</a>
        <a>Blog</a>
        <a>Contact Us</a>
      </div>
      <div className="third">
        <h4>Contact Us:</h4><br />
        <p>Innkey PMS,<br />36 Vasupujya,<br />Satellite Ahmedabad,<br />Gujrat 380015.</p><br /><br />
        <h4>Sales and General Enquiries:</h4>
        <p className='blue-text'>+91-9825520938</p><br />
        <p>Email: <span className='blue-text'>sales@innkeypms.net</span></p>
      </div>
     </div>
     <div className="footer-two">
        <p>INNKEYPMS © 2011-2016, ALL RIGHTS RESERVED</p>
        <div className="social-icons">
          <h4>Follow Us</h4>
          <BsLinkedin className='social-icon'/>
          <FaYoutubeSquare className='social-icon'/>
          <FaFacebook className='social-icon'/>
          <FaInstagramSquare className='social-icon'/>
          <FaSkype className='social-icon'/>
          <FaSquareXTwitter className='social-icon'/>
        </div>
     </div>
    </div>
  )
}

export default Footer
