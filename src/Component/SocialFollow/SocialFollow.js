import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SocialFollow.css'
import { AiOutlineInstagram } from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"

function SocialFollow() {
  return (

        <div class="social-icons">
        <a href="" className="instagram-social">
        {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
      <AiOutlineInstagram className='foo' />
      </a>

      <a href=""
        className="linkedin-social">
        {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
      <AiOutlineLinkedin className="foo"/>
      </a>

      <a href=""
        className="twitter-social">
        {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
      <AiFillTwitterSquare className='foo' />
      </a>

        </div>
        
  )
}

export default SocialFollow