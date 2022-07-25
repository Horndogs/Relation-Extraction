
import React, { Component } from 'react'
import './App.css'
import MyInfo from './my-info'
import resumePdf from "./images/mary-warrick-resume-new.pdf"
import resumeJpg from "./images/mary-warrick-resume-new.jpg"
import Projects from './projects'

import { Route, Switch, Redirect, BrowserRouter as Router, NavLink } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <nav>
          <p className='myName'>Mary Warrick</p>
          <p className='byLine'>Full-Stack Software Engineer <br/>Located in Chicago, Il<br/><span className='email'>
          meaubertw@gmail.com
          </span></p>

          <div className='navLinks'>
            <NavLink  to='/home'
            activeStyle={{
              color: '#EF4907'
             }}
            >Home</NavLink>
            <NavLink to='/projects'
            activeStyle={{
              color: '#EF4907'
             }}
            >Projects</NavLink>
            <a className='resume' href={resumeJpg} target="_blank" >View Resume</a>
            <a className='resume' href={resumePdf} target="_blank" download >Download Resume</a>
          <div className='social'>
          <a href="https://www.linkedin.com/in/mary-warrick-1a21a7b4/"> <i class="fab fa-linkedin" ></i></a>
                <a href="https://github.com/maubertw"> <i class="fab fa-github" ></i></a>
          </div>
          </div>
        </nav>
        <div className='App' >