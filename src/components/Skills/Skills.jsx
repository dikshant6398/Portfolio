import React from 'react';
import "./Skill.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import js from "../../assets/js.svg";
import html from "../../assets/html.png";
import java from "../../assets/java.svg";
import express from "../../assets/express.png";
import css from "../../assets/css3.svg";
import mongodb from "../../assets/mongodb.png";
import spring from "../../assets/spring.png";
import node from "../../assets/node.png";
import react from "../../assets/react.svg";
import bootstrap from "../../assets/bootstrap.svg"

function Skills() {
  return (
    <div id="skills" className='skills'>
        <div className="skill_title">
            <h1>Technical Skills</h1>
            <img src={theme_pattern} alt="skill img"/>
        </div>
        <div className="skill">
            <div className="about_skill html"><img src={html} alt="html"></img><p>HTML</p></div>
            <div className="about_skill css" ><img src={css} alt="css"></img><p>CSS</p></div> 
            <div className="about_skill bootstrap" ><img src={bootstrap} alt="bs"></img><p>Bootstrap</p></div> 
            <div className="about_skill js"><img src={js} alt="js"></img><p>Javascript</p></div>
            <div className="about_skill react"><img src={react} alt="react"></img><p>React</p></div>
            <div className="about_skill express"><img src={express} alt="express"></img><p>Express Js</p></div>                
            <div className="about_skill node"><img src={node} alt="node"></img><p>Node Js</p></div>
            <div className="about_skill java"><img src={java} alt="java"></img><p>Java</p></div>
            <div className="about_skill springboot"><img src={spring} alt="springboot"></img><p>Spring Boot</p></div>
            <div className="about_skill mongodb"><img src={mongodb} alt="mongodb"></img><p>Mongodb</p></div>
        </div>
    </div>
  )
}

export default Skills;
