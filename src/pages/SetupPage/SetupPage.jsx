import React, { Component } from 'react'
import {Box, Slider, Typography} from '@mui/material'
import * as audioInput from '../../utils/audio-input'
import './SetupPage.css'
import SetupIndex from '../../components/SetupIndex/SetupIndex'
import SetupMain from '../../components/SetupMain/SetupMain'
import SetupMenuBar from '../../components/SetupMenuBar/SetupMenuBar'

export default class SetupPage extends Component {
  state = {
    audioOn: false,
    setups: [],
    id: '',
    name: '',
    overdrive: 0,
    overdriveOn: false,
    delay: 0,
    delayOn: false,
    gainBoost: 0,
    gainBoostOn: false,
    reverbOn: false,
    //Add new Effects in here
  }

  async componentDidMount(){
    this.getSetups()
    this.handleNewSetup()

  }

  getSetups = async () => {
    try {
      let jwt = localStorage.getItem('token')
      let fetchSetupResponse = await fetch('/api/setups', {headers: {Authorization: 'Bearer ' + jwt}})
      let setups = await fetchSetupResponse.json();
      this.setState({setups: setups})
    } catch (err) {
      console.error('ERROR:', err)
    }
  }

  handleAudioOn = () => {
    if (this.state.audioOn === false){
      this.setState({audioOn: true})
    }else{
      this.setState({audioOn: false})
    }
  }

  handleSetupCreate = async () => {
    try {
      let newSetup = {
        name: this.state.name,
        overdrive: this.state.overdrive,
        overdriveOn: this.state.overdriveOn,
        delay: this.state.delay,
        delayOn: this.state.delayOn,
        gainBoost: this.state.gainBoost,
        gainBoostOn: this.state.gainBoostOn,
        reverbOn: this.state.reverbOn
          //Add new effects in here
      }
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
      name: 'Insert Setup Name',
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
        overdriveOn: this.state.overdriveOn,
        delay: this.state.delay,
        delayOn: this.state.delayOn,
        gainBoost: this.state.gainBoost,
        gainBoostOn: this.state.gainBoostOn,
        reverbOn: this.state.reverbOn
        //Add enw effects in here
      }
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
    this.setState({
      name: setup.name,
      id: setup._id,
      overdrive: setup.overdrive,
      overdriveOn: setup.overdriveOn,
      delay: setup.delay,
      delayOn: setup.delayOn,
      gainBoost: setup.gainBoost,
      gainBoostOn: setup.gainBoostOn,
      reverbOn: setup.reverbOn
    })

  }


  handleSwitchChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked ? true : false });
    if (this.state.audioOn){ 
      audioInput.handleSetupChange(
        this.state.overdrive, 
        this.state.overdriveOn, 
        this.state.delay, 
        this.state.delayOn, 
        this.state.gainBoost,
        this.state.gainBoostOn,
        this.state.reverbOn,
        )
    }
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.audioOn){ 
      audioInput.handleSetupChange(
        this.state.overdrive, 
        this.state.overdriveOn, 
        this.state.delay, 
        this.state.delayOn, 
        this.state.gainBoost,
        this.state.gainBoostOn,
        this.state.reverbOn,
        )
    }
  }

  handleSetupSave = () => {
    if(this.state.id === ""){
      this.handleSetupCreate()
    }else{
      this.handleSetupUpdate()
    }
  }
  handleSetupCopy = () => {
    this.setState({
      id: '',
      name: 'Insert Setup Name'
    })
  }



  render() {
    return (
      <Box>
        <SetupMenuBar
          handleSetupSave = {this.handleSetupSave}
          handleNewSetup = {this.handleNewSetup}
          handleSetupDelete = {this.handleSetupDelete}
          setUserInState = {this.props.setUserInState}
          handleSetupCopy = {this.handleSetupCopy}
        />
        <SetupMain 
          name={this.state.name} 
          overdrive = {this.state.overdrive}
          overdriveOn = {this.state.overdriveOn} 
          delay = {this.state.delay}
          delayOn = {this.state.delayOn}
          gainBoost = {this.state.gainBoost}
          gainBoostOn = {this.state.gainBoostOn}
          reverbOn = {this.state.reverbOn}
          audioOn = {this.state.audioOn}
          handleChange = {this.handleChange}
          handleSwitchChange = {this.handleSwitchChange}
          handleAudioOn = {this.handleAudioOn}
        />
        <SetupIndex 
          setups= {this.state.setups} 
          handleSetupSelect = {this.handleSetupSelect}
          />
      </Box>
    )
  }
}
