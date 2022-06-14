import React, { Component } from 'react'
import './SetupPage.css'
import SetupIndex from '../../components/SetupIndex/SetupIndex'
import SetupMain from '../../components/SetupMain/SetupMain'
import SetupMenuBar from '../../components/SetupMenuBar/SetupMenuBar'

export default class SetupPage extends Component {
  state = {
   setups: [{name: 'benny', overdrive: 4, delay: 6}],
   currentsetup: {}
  }

  async compoundDidMount(){
    console.log('hey')
    try {
      let fetchSetupResponse = await fetch('/api/setups')
      let setups = await fetchSetupResponse.json();
      this.setState({setups: setups})
      console.log("Hey" ,this.state.setups)
    } catch (err) {
      console.error('ERROR:', err)
    }

  }

  handleCheckout = async () => {
    try {
      let jwt = localStorage.getItem('token')
      let fetchResponse = await fetch("/api/setups", {
        method: "POST",
        headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt},
        body: JSON.stringify({setups: this.state.setups}) // <-- send this object to server
        }) 
      let serverResponse = await fetchResponse.json() // <-- decode fetch response
      console.log("Success:", serverResponse)   // <-- log server response
    } catch (err) {
      console.error("Error:", err) // <-- log if error 
    }
  }
  render() {
    return (
      <div className='SetupPage'>
        <SetupMenuBar/>
        <SetupMain />
        <SetupIndex setups= {this.state.setups}/>
      </div>
    )
  }
}
