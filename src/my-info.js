
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

                <img src={card}/>
                <p>some praise from my time as a fellow</p><br/><br/>

                <iframe width="350" height="197" src="https://www.youtube.com/embed/1caGbJbt7yM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>Fun fact about me, I love oysters!  I made this video to demonstrate my shucking technique.</p>


                </div>
          </div>);
    }
  }



    export default MyInfo;


