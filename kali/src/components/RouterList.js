import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import KaliLogo from '../image/kali-logo.svg'
import ArrowDown from '../image/arrowdown.svg'
import DocumentationPage from '../pages/DocumentationPages'
import ToolsDocumentation from '../pages/ToolsDocumentation.js'
import FrequentlyAskedQuestions from '../pages/FrequentlyAskedQuestions.js'
import KnownIssues from '../pages/KnownIssues.js'
import Forums from '../pages/Forums.js'
import CommunitySupport from '../pages/CommunitySupport.js'
import Discord from '../pages/Discord.js'
import AutoPackageTest from '../pages/AutoPackageTest.js'
import Blog from '../pages/Blog.js'
import GetKali from '../pages/GetKali.js'
import BudTracker from '../pages/BudTracker.js'
import JoinNewsletter from '../pages/JoinNewsletter.js'
import MirrorLocation from '../pages/MirrorLocation.js'
import GetInvolved from '../pages/GetInvolved.js'
import KaliLinuxRevealed from '../pages/KaliLinuxRevealed.js'
import Pen_200 from '../pages/Pen_200.js'
import Pen_210 from '../pages/Pen_210.js'
import Web_200 from '../pages/Web_200.js'
import Web_201 from '../pages/Web_201.js'
import Exp_301 from '../pages/Exp_301.js'
import Exp_312 from '../pages/Exp_312.js'
import Exp_401 from '../pages/Exp_401.js'
import Soc_200 from '../pages/Soc_200.js'
import GitRepositories from '../pages/GitRepositories.js'
import Packages from '../pages/Packages.js'
import KaliNethunterstats from '../pages/KaliNethunterstats.js'
import KaliLinuxOverview from '../pages/KaliLinuxOverview.js'
import PressPack from '../pages/PressPack.js'
import KaliSwagStore from '../pages/KaliSwagStore.js'
import MeetTheKaliTeam from '../pages/MeetTheKaliTeam.js'
import Parternerships from '../pages/Parternerships.js'
import ContactUs from '../pages/ContactUs.js'
import Home from '../pages/Home.js'

const RouterList = () => {
    return (
        <Router>
            <ul id='navlist'>
                <div id='navlistitem1'>
                    <li>
                        <Link to='/'><img src={KaliLogo} alt="kali logo" /></Link>
                    </li>
                </div>
                <div id='navlistitem2'>
                    <li>
                        <Link to="/get-kali"><button id='navlistbuttonx'>GET KALI</button></Link>
                    </li>
                    <li>
                        <Link to="/blog"><button id='navlistbuttonx'>BLOG</button></Link>
                    </li>
                    <div id='dropdown'>
                        <button id='navlistbutton'>DOCUMENTATION<span><img src={ArrowDown} alt="down" /></span></button>
                        <div id='content'>
                            <Link id='link' to="/documentation-pages">DOCUMENTATION PAGES</Link><br/>
                            <Link id='link' to="/tools-documentation">TOOLS DOCUMENTATION</Link><br/>
                            <Link id='link' to="/frequently-asked-questions">FREQUENTLY ASKED QUESTIONS</Link><br/>
                            <Link id='link' to="/known-issue">KNOWN ISSUE</Link><br/>
                        </div>
                    </div>
                    <li>
                        <div id='dropdown'>
                        <button id='navlistbutton'>COMMUNITY<span><img src={ArrowDown} alt="down" /></span></button>
                        <div id='content'>
                            <Link id='link' to="/community-support">COMMUNITY SUPPORT</Link><br/>
                            <Link id='link' to="/forums">FORUM</Link><br/>
                            <Link id='link' to="/discord">DISCORD</Link><br/>
                            <Link id='link' to="/joinnews-letter">JOINNEWS LETTER</Link><br/>
                            <Link id='link' to="/mirror-location">MIRROR LOCATION</Link><br/>
                            <Link id='link' to="/get-involved">GET INVOLVED</Link><br/>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div id='dropdown'>
                        <button id='navlistbutton'>COURSES<span><img src={ArrowDown} alt="down" /></span></button>
                        <div id='content'>
                            <Link id='link' to="/kali-linux-revealed">Kali Linux Revealed</Link><br/>
                            <Link id='link' to="/pen-200">PEN-200</Link><br/>
                            <Link id='link' to="/pen-210">PEN-210</Link><br/>
                            <Link id='link' to="/web-200">WEB-200</Link><br/>
                            <Link id='link' to="/web-201">WEB-201</Link><br/>
                            <Link id='link' to="/exp-301">EXP-301</Link><br/>
                            <Link id='link' to="/exp-312">EXP-312</Link><br/>
                            <Link id='link' to="/exp-410">EXP-410</Link><br/>
                            <Link id='link' to="/soc-200">SOC-200</Link><br/>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div id='dropdown'>
                        <button id='navlistbutton'>DEVELOPERS<span><img src={ArrowDown} alt="down" /></span></button>
                        <div id='content'>
                            <Link id='link' to="/git-repositories">Git Repositories</Link><br/>
                            <Link id='link' to="/packages">Packages</Link><br/>
                            <Link id='link' to="/auto-package-test">Auto Package Test</Link><br/>
                            <Link id='link' to="/bud-tracker">Bud Tracker</Link><br/>
                            <Link id='link' to="/kali-nethunter-stats">Kali Nethunter stats</Link><br/>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div id='dropdown'>
                        <button id='navlistbutton'>ABOUT<span><img src={ArrowDown} alt="down" /></span></button>
                        <div id='contentabout'>
                            <Link id='link' to="/kali-linux-overview">Kali Linux Overview</Link><br/>
                            <Link id='link' to="/press-pack">Press Pack</Link><br/>
                            <Link id='link' to="/kali-swag-store">Kali Swag Store</Link><br/>
                            <Link id='link' to="/meet-the-kali-team">Meet The Kali Team</Link><br/>
                            <Link id='link' to="/parternerships">Parternerships</Link><br/>
                            <Link id='link' to="/contact-us">Contact Us</Link><br/>
                        </div>
                        </div>
                    </li>
                </div>
            </ul>
            <Routes>
                <Route path='/documentation-pages' element={<DocumentationPage />} ></Route>
                <Route path='/tools-documentation' element={<ToolsDocumentation />} ></Route>
                <Route path='/frequently-asked-questions' element={<FrequentlyAskedQuestions />} ></Route>
                <Route path='/known-issue' element={<KnownIssues/>} ></Route>
                <Route path='/community-support' element={<CommunitySupport/>}></Route>
                <Route path='/forums' element={<Forums/>}></Route>
                <Route path='/discord' element={<Discord/>}></Route>
                <Route path='/joinnews-letter' element={<JoinNewsletter/>}></Route>
                <Route path='/mirror-location' element={<MirrorLocation/>}></Route>
                <Route path='/get-involved' element={<GetInvolved/>}></Route>
                <Route path='/kali-linux-revealed' element={<KaliLinuxRevealed/>}></Route>
                <Route path='/pen-200' element={<Pen_200/>}></Route>
                <Route path='/pen-210' element={<Pen_210/>}></Route>
                <Route path='/web-200' element={<Web_200/>}></Route>
                <Route path='/web-201' element={<Web_201/>}></Route>
                <Route path='/exp-301' element={<Exp_301/>}></Route>
                <Route path='/exp-312' element={<Exp_312/>}></Route>
                <Route path='/exp-410' element={<Exp_401/>}></Route>
                <Route path='/soc-200' element={<Soc_200/>}></Route>
                <Route path='/git-repositories' element={<GitRepositories/>}></Route>
                <Route path='/packages' element={<Packages/>}></Route>
                <Route path='/auto-package-test' element={<AutoPackageTest/>}></Route>
                <Route path='/bud-tracker' element={<BudTracker/>}></Route>
                <Route path='/kali-nethunter-stats' element={<KaliNethunterstats/>}></Route>
                <Route path='/kali-linux-overview' element={<KaliLinuxOverview/>}></Route>
                <Route path='/press-pack' element={<PressPack/>}></Route>
                <Route path='/kali-swag-store' element={<KaliSwagStore/>}></Route>
                <Route path='/meet-the-kali-team' element={<MeetTheKaliTeam/>}></Route>
                <Route path='/parternerships' element={<Parternerships/>}></Route>
                <Route path='/contact-us' element={<ContactUs/>}></Route>
                <Route path='/get-kali' element={<GetKali/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
        </Router>
    )
}

export default RouterList
