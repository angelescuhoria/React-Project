//import React from 'react';
import './App.min.css';
import { SignUp } from './pages/signup/SignUp';
import { Login } from './pages/login/Login';
import { Home } from './pages/home/Home';
import { ProfilePage } from './pages/profile/Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/register" element = {<SignUp />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/myprofile" element = {<ProfilePage />} />
      </Routes>
    </Router>
  );
}
