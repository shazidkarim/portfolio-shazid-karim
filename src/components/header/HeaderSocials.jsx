import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaFacebook } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/sk.shazid.9469/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/shazidkarim" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.facebook.com/sk.shazid.9469/" target="_blank" rel="noreferrer" ><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials;