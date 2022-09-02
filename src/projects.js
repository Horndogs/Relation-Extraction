import React, { Component } from 'react'
import ProjectDisplay from './project-display';
import Icons from './language-icons'
import projects from './project-data'
import html from './images/logos/html.png'
import css from './images/logos/css.png'
import express from './images/logos/express.png'
import javascript from './images/logos/javascript.png'
import neo4j from './images/logos/neo4j.png'
import node from './images/logos/node.png'
import react from './images/logos/react.png'
import redux from './images/logos/redux.png'
import sequelize from './images/logos/sequelize.png'
import python from './images/logos/python.png'
import jquery from './images/logos/jquery.png'
import coinbase from './images/logos/coinbase.png'

class Projects extends Component {
  render(){
    return(
      <div className='projects'>
        <ProjectDisplay projectData={projects.codeMap} icons={[neo4j, node, express, react, redux, html, css]}/>
        <ProjectDisplay projectData={projects.stockTicker} icons={[react, html, css, coinbase]} />
        <ProjectDisplay projectData={projects.candyCrushers} icons={[sequelize, node, express, react, redux, html, css]}/>
        <div className='projects displayBox'>
          <p className='projectHeader'>Words in Motion</p>
          <a className='visit' href='https://medium.com/@mewarrick/things-to-consider-when-us