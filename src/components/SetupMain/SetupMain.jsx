import React from 'react'
import {Box, Button, TextField} from '@mui/material'
import { MusicNote, MusicOff } from '@mui/icons-material'
import SliderBox from '../SliderBox/SliderBox'
import * as audioInput from '../../utils/audio-input'


export default function SetupMain(props) {
  function handleClickStart(){
    audioInput.audioStart(
      props.overdrive, 
      props.overdriveOn, 
      props.delay, 
      props.delayOn, 
      props.gainBoost,
      props.gainBoostOn,
      props.reverbOn
      )
    props.handleAudioOn()
  }
  function handleClickStop(){
    audioInput.audioStop()
    props.handleAudioOn()
  }


  return (
    <Box
    sx={{
      px:40,
      position: 'relative',
      height:"100vh",
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr 1fr 1fr'
    }}
    >
      <Box
        sx={{
          gridColumn:'1/3',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
      <TextField
        inputProps={{style: {fontSize: 60, textAlign: 'center'}}}
        id="outlined-basic" 
        label="" 
        variant="standard"
        value= {props.name}
        name='name'
        onChange={props.handleChange}
      />
      </Box>
      <SliderBox className = 'OverdriveSlider' 
      audioOn = {props.audioOn}
      title = {'Overdrive'} 
      name= {'overdrive'}
      switchName={'overdriveOn'}
      switchChecked={props.overdriveOn} 
      setupNum={props.overdrive} 
      handleChange = {props.handleChange}
      handleSwitchChange = {props.handleSwitchChange}
      />
      <SliderBox className = 'DelaySlider'
      audioOn = {props.audioOn} 
      title= {'Delay'} 
      name = {'delay'}
      switchName={'delayOn'}
      switchChecked={props.delayOn}  
      setupNum={props.delay} 
      handleChange = {props.handleChange}
      handleSwitchChange = {props.handleSwitchChange}
      />
      <SliderBox className = 'Tremelo' title= {'Tremelo (COMING SOON)'} />
      <SliderBox className = 'Reverb'
      audioOn = {props.audioOn} 
      title= {'Reverb (Work in Progress)'}
      name = "Reverb"
      switchName={'reverbOn'}
      switchChecked={props.reverbOn} 
      handleChange = {props.handleChange}
      handleSwitchChange = {props.handleSwitchChange}  
      />
      <SliderBox className = 'Chorus' title= {'Chorus (COMING SOON)'} />
      <SliderBox className = 'Gain'
      audioOn = {props.audioOn} 
      title = {'GainBoost'} 
      name= {'gainBoost'}
      switchName={'gainBoostOn'}
      switchChecked={props.gainBoostOn}  
      setupNum={props.gainBoost} 
      handleChange = {props.handleChange}
      handleSwitchChange = {props.handleSwitchChange}
      />
      <Box
        sx={{
          gridColumn:'1/3',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {props.audioOn ?
          <Button
          style={{maxWidth: '20%', maxHeight: '20%', minWidth: '15%', minHeight: '40%', fontSize: 40}}
          variant="contained" 
          startIcon={<MusicOff style={{maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px'}} />} 
          endIcon={<MusicOff style={{maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px'}} />}
          onClick={() => {handleClickStop()}}
          >Stop
          </Button>
          :
          <Button  
          style={{maxWidth: '20%', maxHeight: '20%', minWidth: '15%', minHeight: '40%', fontSize: 40}}
          variant="contained" 
          startIcon={<MusicNote style={{maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px'}}/>} 
          endIcon={<MusicNote style={{maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px'}}/>} 
          onClick={() => {handleClickStart()}}
          >Start
          </Button>
        }
        

        
      </Box>
    </Box>
  )
}
