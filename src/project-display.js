
import React, { Component } from 'react'
import Icons from './language-icons'



const ProjectDisplay = ({ projectData, icons }) => {
  const { img, main, role, link, repo, name } = projectData
  return(
    <div className='projects displayBox'>
    <a className='projectLinks' href={link}>
      <p className='projectHeader'>{name}</p>
      {
        name !== 'Personal Website' && name !== 'M.A.S.H.' && <a className='visit' href={link}>{`Visit ${name}`}</a>
      }
      {