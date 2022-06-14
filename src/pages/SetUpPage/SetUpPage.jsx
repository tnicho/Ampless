import React, { Component } from 'react'
import './SetupPage.css'
import SetupIndex from '../../components/SetupIndex/SetupIndex'
import SetupMain from '../../components/SetupMain/SetupMain'
import SetupMenuBar from '../../components/SetupMenuBar/SetupMenuBar'

export default class SetupPage extends Component {
  state = {
   setups: [{name: 'benny', overdrive: 4, delay: 6}],
   name: 'TEST TEST',
   overdrive: 0,
   delay: 0,
  }

  async componentDidMount(){
    try {
      let fetchSetupResponse = await fetch('/api/setups')
      let setups = await fetchSetupResponse.json();
      this.setState({setups: setups})
      console.log("Hey" ,this.state.setups)
    } catch (err) {
      console.error('ERROR:', err)
    }

  }

  handleTitleChange = (text) => {
    this.setState({name: text })
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSetupCreate = async () => {
    try {
      let newSetup = {
          name: this.state.name,
          overdrive: this.state.overdrive,
          delay: this.state.delay,
      }
      console.log(newSetup)
      let jwt = localStorage.getItem('token')
      let fetchResponse = await fetch("/api/setups", {
        method: "POST",
        headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt},
        body: JSON.stringify({newSetup}) // <-- send this object to server
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
        <SetupMenuBar
          handleSetupCreate = {this.handleSetupCreate}
        />
        <SetupMain 
          name={this.state.name} 
          overdrive = {this.state.overdrive} 
          handleChange = {this.handleChange}
          handleTitleChange = {this.handleTitleChange}
          delay = {this.state.delay}/>
        <SetupIndex setups= {this.state.setups}/>
      </div>
    )
  }
}
