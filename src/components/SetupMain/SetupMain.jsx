import React from 'react'
import EditableLabel from 'react-inline-editing'
import {Box, Button, TextField} from '@mui/material'
import { MusicNote, MusicOff } from '@mui/icons-material'
// import ContentEditable from 'react-contenteditable'
import SliderBox from '../SliderBox/SliderBox'
import './SetupMain.css'

export default function SetupMain(props) {


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
      <SliderBox className = 'DelaySlider' title= {'delay'} name = {'delay'} setupNum={props.delay} handleChange = {props.handleChange}/>
      <SliderBox className = 'Tremelo' title= {'Tremelo'} />
      <SliderBox className = 'Reverb' title= {'Reverb'} />
      <SliderBox className = 'Chorus' title= {'Chorus'} />
      <SliderBox className = 'Gain' title = {'Gain'} />
      <Box
        sx={{
          gridColumn:'1/3',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button  variant="contained" startIcon={<MusicNote />} endIcon={<MusicNote/>}>Start</Button>
        {/* <Button variant="contained" startIcon={<MusicOff />} endIcon={<MusicOff/>}>Stop</Button> */}
      </Box>
    </Box>
  )
}
