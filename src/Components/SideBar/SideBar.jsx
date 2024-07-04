import React from 'react'
import './SideBar.css'
import githubIcon from '../../Assets/github.png'
import LinkedinIcon from '../../Assets/linkedin.png'
import InstagramIcon from '../../Assets/instagram.png'
import TwitterIcon from '../../Assets/twitter.png'

const SideBar = () => {



  return (
    <div className='SideBar'>
      <div className='icons'>
        <a href='https://github.com/R00t105' target='_blank' rel="noreferrer"><img src={githubIcon} alt='githubIcon'/></a>
        <a href='https://www.linkedin.com/in/momenclaymo/' target='_blank' rel="noreferrer"><img src={LinkedinIcon} alt='LinkedinIcon'/></a>
        <a href='https://www.instagram.com/moamen1005/' target='blank' rel="noreferrer"><img src={InstagramIcon} alt='InstagramIcon'/></a>
        <a href='https://x.com/MomenClay' target='_blank' rel="noreferrer"><img src={TwitterIcon} alt='TwitterIcon'/></a>
        
      </div>
    </div>
  )
}

export default SideBar
