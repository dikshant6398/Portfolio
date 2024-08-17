import React from 'react';
import { FaLinkedin ,FaGithub} from 'react-icons/fa';
import { SiCodechef } from "react-icons/si";
import "./Sociallink.css";

function Sociallink() {
  return (
    <div className='sociallink'>
      <ul className='sociallink_list'>
        <li className='sociallink_item'>
            <a href='https://www.linkedin.com/in/dikshant-sharma-56154323a/' className='sociallink_link'><>LinkedIn<span className="icon"><FaLinkedin size={25}/></span></></a>
        </li>
        <li className='sociallink_item'>
            <a href='https://github.com/dikshant6398' className='sociallink_link'><>Github<span className="icon"><FaGithub size={25}/></span></></a>
        </li>
        <li className='sociallink_item'>
            <a href='https://www.codechef.com/users/dikshant6398' className='sociallink_link'><>Codechef<span className="icon"><SiCodechef size={25}/></span></></a>
        </li>
        
      </ul>
    </div>
  )
}

export default Sociallink
