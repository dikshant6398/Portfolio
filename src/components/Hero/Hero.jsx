
import './Hero.css'
import profile from "../../assets/profile.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="home" className='hero'>
        <div className='hero2'>
        <h2>Hi,</h2>
        <h1><span>I'm Dikshant Sharma</span></h1>
        <p>Software Developer / Web Developer </p>
        <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className="anchor_link" offset={50} href="#contact">Connect With me</AnchorLink></div>
        <div className="hero-resume border_set"><a href="https://drive.google.com/file/d/1Uu9V72NZaTTPKZWrI14mbeFBJqafx8-l/view?usp=drivesdk"><span >My Resume</span></a></div>
        </div>
        </div>
        <img src={profile} alt='profile' className='img-profile'/>
    </div>
  )
}

export default Hero
