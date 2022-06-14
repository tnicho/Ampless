import React, { Component } from 'react'
import './SetupPage.css'
import SetupIndex from '../../components/SetupIndex/SetupIndex'
import SetupMain from '../../components/SetupMain/SetupMain'
import SetupMenuBar from '../../components/SetupMenuBar/SetupMenuBar'

export default class SetupPage extends Component {
  render() {
    return (
      <div className='SetupPage'>
        <SetupMenuBar/>
        <SetupMain/>
        <SetupIndex/>
      </div>
    )
  }
}
