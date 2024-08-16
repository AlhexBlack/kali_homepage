import React from 'react'
import Dragon from '../image/kali-dragon-icon.svg'
import ArrowDown from '../image/arrowdown.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown, faBookOpen } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <section>
    <div id="homepop">
      <div id="homepop-logo"><img src={Dragon} alt='dragon logo'/>
      </div>
      <div id="homepop-text">
          <div>
            <h1>The most advanced<br/>Penetration Testing Distribution</h1>
            <p>Kali Linux is an open-source, Debian-based Linux distribution geared towards various information security tasks, such as Penetration Testing, Security Research, Computer Forensics and Reverse Engineering.</p>
          </div>
          <div>
            <button id="download-button">Download<span>&nbsp;<FontAwesomeIcon icon={faCircleDown} /></span></button>
            <button id="documentation-button">Documentation<span>&nbsp;<FontAwesomeIcon icon={faBookOpen} /></span></button>
          </div>
        </div>
      </div>
      <div id='movingarrow'>
        <img src={ArrowDown} alt='down'/>
      </div>
    </section>  
  )
}

export default Home
