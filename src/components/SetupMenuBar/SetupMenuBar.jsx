import React from 'react'
import UserLogOut from '../UserLogOut/UserLogOut'
import "./SetupMenuBar.css"

export default function SetupMenuBar(props) {
  return (
    <div className= 'SetupMenuBar'>
        SetupMenuBar
        <button>Save</button>
        <button onClick={props.handleSetupCreate}>Save New</button>
        <button>Delete</button>
        <UserLogOut/>
    </div>
  )
}
