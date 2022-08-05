
import React, { Component } from 'react'
import google from './images/google.jpg'
import card from './images/card.jpg'
import { NavLink } from 'react-router-dom'



class MyInfo extends Component {


  render() {
    return (
      <div className='welcome' >
                <div className='intro-text'>
                <span className='hello'>Welcome!</span><br/>

                My name is Mary, and I am a full stack software developer.  The process of solving problems gets me excited.  I want to create tools for both client facing and internal users.  Most recently I have had the pleasure of serving as a teaching fellow at Fullstack Academy of Code in Chicago.  I spent over 550 hours teaching, mentoring, and leading student agile teams.  We covered everything from git to testing and taught full stack Javascript development including: React, Redux, Node, Express, Postgres, Sequelize, HTML, and CSS.<br/><br/>


                <img src={google}/>
                <p>myself and some students on a trip to Google campus in Chicago (I'm 3rd from the left!)</p>

                Prior to being selected as a fellow, I went through the program myself.  Coming from a background as a professional cook, I was instantly enveloped in the world of programming.  I loved how everything was like a puzzle to be solved, and working with others to figure out complex problems.<br/><br/>

                <NavLink className='inline-link' to='/projects' >Please stay a while and have a look at my projects and some cool stuff I have done.</NavLink><br/><br/>


                <span className='hello'>-Mary</span><br/><br/>