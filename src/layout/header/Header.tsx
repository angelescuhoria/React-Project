//import React from 'react';
import './Header.min.css';
import { FaDumbbell } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { useAuth } from '../../config/firebase';


export const Header = () => {

  const currentUser = useAuth();
  const navigate = useNavigate();

  const Logout = () => {
   auth.signOut()
   .then(() => navigate('/'))
   .catch(error => console.log(error));
 }

  return (
    <header id = "wrapper">
      <Link to = "/" className = 'link'><h1 className = "headerH1"><span>Fit</span>ify <FaDumbbell /></h1></Link>
            <nav>
              <ul id = "nav_links">
                <li id = "home">
                  <Link to = "/" className = 'link'><AiOutlineHome id = 'house' />Home</Link>
                </li>
                <li className = "rest">
                  {
                    currentUser? <Link to = "/myprofile" className = 'link'>{currentUser.email}</Link>
                      :
                    <Link to = "/login" className = 'link'>Login</Link>
                  }
                </li>
                <li className = "rest">
                  {
                    currentUser? <button className = 'button-link' onClick={() => Logout()}>Log Out</button>
                      :
                    <Link to = "/register" className = 'link'>Sign Up</Link>
                  }
                </li>
                <li className = "rest">Stats</li>
                <li className = "rest">Leaderboards</li>
                <li className = "rest">Activities</li>
              </ul>
            </nav>
    </header>
  );
}
