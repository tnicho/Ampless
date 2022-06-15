import React, { Component } from 'react'
import './SetupPage.css'
import SetupIndex from '../../components/SetupIndex/SetupIndex'
import SetupMain from '../../components/SetupMain/SetupMain'
import SetupMenuBar from '../../components/SetupMenuBar/SetupMenuBar'

export default class SetupPage extends Component {
  state = {
   setups: [],
   id: '',
   name: '',
   overdrive: 0,
   delay: 0,
  }

  async componentDidMount(){
    this.getSetups()
    this.handleNewSetup()

  }

  getSetups = async () => {
    try {
      console.log('inside getSetups')
      let fetchSetupResponse = await fetch('/api/setups')
      let setups = await fetchSetupResponse.json();
      this.setState({setups: setups})
      console.log("Hey" ,this.state.setups)
    } catch (err) {
      console.error('ERROR:', err)
    }
  }

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
    this.getSetups()
  }

  handleNewSetup = () => {
    this.setState({
      id: '',
      name: 'Insert A Name',
      overdrive: 0,
      delay: 0,
    })
  }

  handleSetupUpdate = async () => {
    try {
      let newSetup = {
        id: this.state.id,
        name: this.state.name,
        overdrive: this.state.overdrive,
        delay: this.state.delay,
      }
      console.log("newsetup is ",newSetup)
      let jwt = localStorage.getItem('token')
      let fetchResponse = await fetch("/api/setups/", {
        method: "PUT",
        headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt},
        body: JSON.stringify({newSetup}) // <-- send this object to server
        }) 
      let serverResponse = await fetchResponse.json() // <-- decode fetch response
      console.log("Success:", serverResponse)   // <-- log server response
    } catch (err) {
      console.error("Error:", err) // <-- log if error 
    }
    this.getSetups()
  }

  handleSetupDelete = async () => {
    if (this.state.id === ''){
      this.handleNewSetup()
    }else{
      try {
        let fetchResponse = await fetch("/api/setups/"+ this.state.id, {method: "DELETE"})
        let serverResponse = await fetchResponse.json() // <-- decode fetch response
        console.log("Success:", serverResponse)   // <-- log server response
      } catch (err) {
        console.error("Error:", err) // <-- log if error 
      }
        this.getSetups()
        this.handleNewSetup()
    }
  
  }

  handleSetupSelect = (setup) => {
    console.log('in SetupSelect', setup)
    this.setState({
      name: setup.name,
      id: setup._id,
      overdrive: setup.overdrive,
      delay: setup.delay
    })

  }


  handleChange = (e) => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSetupSave = () => {
    if(this.state.id === ""){
      this.handleSetupCreate()
    }else{
      this.handleSetupUpdate()
    }

  }



  render() {
    return (
      <div className='SetupPage'>
        <SetupMenuBar
          handleSetupSave = {this.handleSetupSave}
          handleNewSetup = {this.handleNewSetup}
          handleSetupDelete = {this.handleSetupDelete}
          setUserInState = {this.props.setUserInState}
        />
        <SetupMain 
          name={this.state.name} 
          overdrive = {this.state.overdrive} 
          handleChange = {this.handleChange}
          delay = {this.state.delay}/>
        <SetupIndex setups= {this.state.setups} handleSetupSelect = {this.handleSetupSelect}/>
      </div>
    )
  }
}
