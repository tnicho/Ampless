import React from 'react'
import './SetupItem.css'

export default function SetupItem(props) {
  return (
    <div className="SetupItem" >
        SetupItem
        <br/>
        <label>name: {props.setup.name}</label><br/>
        <label>id: {props.setup._id}</label><br/>
        <label>overdrive: {props.setup.overdrive}</label><br/>
        <label>delay: {props.setup.delay}</label><br/>
        <button onClick={() => props.handleSetupSelect(props.setup)}>Open Setup</button>
    </div>
  )
}
