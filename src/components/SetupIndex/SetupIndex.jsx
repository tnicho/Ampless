import React from 'react'
import './SetupIndex.css'
import SetupItem from '../SetupItem/SetupItem'

export default function SetupIndex(props) {

  return (
    <div className='SetupIndex'>SetupIndex
    {props.setups.map(su => 
      <SetupItem setup={su}/>)}
    </div>
  )
}
