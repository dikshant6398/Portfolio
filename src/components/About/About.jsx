import React from 'react'
import './About.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.jpg";


function About() {
  return (
    <div id="about" className='about'>
        <div className="about_title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="about img"/>
        </div>
        <div className="about_section">
            <div className="about_left">
                <img src={profile} alt="profile" />
            </div>
            <div className="about_right">
                <div className='about_para'>
                    <p> I’m Dikshant Sharma, a passionate full-stack developer with a keen eye for detail and a love for creating innovative web solutions. With a strong foundation in front-end technologies like React, HTML, and CSS, paired with back-end expertise in Node.js, Express.js,Java and MongoDB, I specialize in building dynamic, user-centric applications.</p>
                    <p>My enthusiasm for full-stack development shines through both my growing experience and the dedication I bring to every project.</p>
                    <p>With a passion for full-stack development, I thrive on creating innovative and efficient web solutions. My expertise lies in front-end technologies such as React, HTML, and CSS, seamlessly combined with back-end knowledge in Node.js, Express.js, Java, and MongoDB. I'm committed to building dynamic, user-centric applications, and I approach each project with meticulous attention to detail.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About
