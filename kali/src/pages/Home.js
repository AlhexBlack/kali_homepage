import React from 'react'
import Dragon from '../image/kali-dragon-icon.svg'
import ArrowDown from '../image/arrowdown.svg'

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
            <button id="download-button">Download</button>
            <button id="documentation-button">Documentation</button>
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
