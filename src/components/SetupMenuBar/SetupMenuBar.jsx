import React from 'react'
import UserLogOut from '../UserLogOut/UserLogOut'
import "./SetupMenuBar.css"

export default function SetupMenuBar(props) {
  return (
    <div className= 'SetupMenuBar'>
        SetupMenuBar
        <button onClick={props.handleNewSetup}> New Blank Setup</button>
        <button onClick={props.handleSetupSave}>Save</button>
        <button onClick={props.handleSetupDelete}>Delete</button>
       
        <UserLogOut/>
    </div>
  )
}
