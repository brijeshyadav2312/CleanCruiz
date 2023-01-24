import React from 'react'
import '../Css/Main.css'
import amazon from '../Assets/compnies/amazon-logo 1.png'
import ebay from '../Assets/compnies/ebay-logo 1.png'
import klarna from '../Assets/compnies/klarna-logo 1.png'
import masterCard from '../Assets/compnies/master-card-logo 1.png'
import neteller from '../Assets/compnies/neteller-logo 1 1.png'
import stripe from '../Assets/compnies/stripe-logo 1.png'
import googlePlay from '../Assets/icons/Google play 1.png'
import iphone from '../Assets/illustration/iPhoneProMax.png'

import printer from '../Assets/icons/printer 1.png'
import outdoor from '../Assets/icons/Outdoor 1.png'
import group from '../Assets/icons/Group 3.png'

import women from '../Assets/illustration/Woman.png'

const Main = () => {
  return (
    <div>
      <div className='frontPage'>
        <div>
          <p>Let us handle your next cleaning</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Thank you.</span>
          <span>BOOK NOW</span>
        </div>
        <div className='front-backgroundImage'>
        </div>
      </div>
      <div className='companies'>
        <img src={amazon} alt="companies-logo"/>
        <img src={ebay} alt="companies-logo"/>
        <img src={klarna} alt="companies-logo"/>
        <img src={masterCard} alt="companies-logo"/>
        <img src={stripe} alt="companies-logo"/>
        <img src={neteller} alt="companies-logo"/>
      </div>
      <div className='appDescription'>
        <div>
          <p>Download the Clean Cruiz App on playstore and get 10% discount</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Thank you. </span>
          <img src={googlePlay} alt="googlePlay" width={'240px'}/>
        </div>
        <img src={iphone} alt="iphone" className='iphoneImage' width={'316px'}/>
      </div>

      <div className='services'>
        <p className='servicesHeading'>Our services include</p>
        <div className='servicesBox'>
        <div className='servicesCards'>
          <div>
            <p>Office cleaning</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua<br/>Thank you.</span>
            <span><img src={printer} alt="icons"/></span>
          </div>
        </div>
        <div className='servicesCards'>
          <div>
            <p>Home cleaning</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <br/>Thank you.</span>
            <span><img src={group} alt="icons"/></span>
          </div>
        </div>
        <div className='servicesCards'>
          <div>
            <p>Out door cleaning</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <br/>Thank you.</span>
            <span><img src={outdoor} alt="icons"/></span>
          </div>
        </div>
        </div>
      </div>
      <div className='customerCare'>
        <div>
          <p>Our customer care agents are always ready to help you</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore  dolore magna aliqua  ghetu          Thank you.</span>
          <span>BOOK NOW</span>
        </div>
        <img src={women} alt=""/>
      </div>
    </div>
  )
}

export default Main
