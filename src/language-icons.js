
import React from 'react'

const Icons = ({icons}) => {
  return(
    <div className='icons'>
      {
        icons.map(icon => {
            return <img src={icon} className='logos'/>
        })
      }
    </div>
  )
}

export default Icons