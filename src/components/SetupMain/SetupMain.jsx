import React from 'react'
import EditableLabel from 'react-inline-editing'
import {Box, Button, TextField, Typography} from '@mui/material'
import { MusicNote, MusicOff } from '@mui/icons-material'
// import ContentEditable from 'react-contenteditable'
import SliderBox from '../SliderBox/SliderBox'
import * as audioInput from '../../utils/audio-input'
import './SetupMain.css'

export default function SetupMain(props) {
  function handleClick(){
    audioInput.audioStart()
    props.handleAudioOn()
  }


  return (
    <Box 
    sx={{
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
      {/* <EditableLabel
      labelFontSize = '50px' 
      inputFontSize = '50px' 
      inputWidth = '30vw' 
      inputHeight = '50px' 
      text={props.name} 
      onFocusOut={props.handleTitleChange
      }/><br/> */}
      <TextField
        id="outlined-basic" 
        label="" 
        variant="standard"
        value= {props.name}
        name='name'
        onChange={props.handleChange}
      />
      </Box>
      <SliderBox className = 'OverdriveSlider' title = {'Overdrive'} name= {'overdrive'} setupNum={props.overdrive} handleChange = {props.handleChange}/>
      <SliderBox className = 'DelaySlider' title= {'Delay'} name = {'delay'} setupNum={props.delay} handleChange = {props.handleChange}/>
      <SliderBox className = 'Tremelo' title= {'Tremelo COMING SOON'} />
      <SliderBox className = 'Reverb' title= {'Reverb COMING SOON'} />
      <SliderBox className = 'Chorus' title= {'Chorus COMING SOON'} />
      <SliderBox className = 'Gain' title = {'Gain COMING SOON'} />
      <Box
        sx={{
          gridColumn:'1/3',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {props.audioOn ?
          <Button variant="contained" startIcon={<MusicOff />} endIcon={<MusicOff/>}>Stop</Button>
          :
          <Button  
          variant="contained" 
          startIcon={<MusicNote />} 
          endIcon={<MusicNote/>} 
          onClick={() => {handleClick()}}
          >Start
          </Button>
        }
        

        
      </Box>
    </Box>
  )
}
