import React from 'react'
import {Box, Slider, Typography, Switch, Card} from '@mui/material'
import './SliderBox.css'


export default function SliderBox(props) {
  return (
    <Box
    sx={{ m: 1, backgroundColor: 'grey.200', boxShadow: 6, borderColor: 'background.paper'}}
    border= {5}
    display= 'flex'
    flexDirection= 'column'
    alignItems= 'center'
    justifyContent= 'center'
    >
      <Typography sx={{fontWeight: 550}}variant='h4'>{props.title} : {props.setupNum}</Typography>
        <Slider
          className = 'SetupSlider'
          sx={{
            paddingTop: 5,
            width: '50%',
            height: 20,
            '& .MuiSlider-thumb': {height: 40, width: 40}
          }}
          disabled = {(props.audioOn && (!(props.switchChecked))) ? true : false}
          area-label={props.title}
          step={1}
          size= 'Large'
          marks
          min={0}
          max={10}
          name = {props.name}
          value = {props.setupNum}
          onChange={props.handleChange}
        />
        <Switch
        disabled = {(props.audioOn && (!(props.switchChecked))) ? true : false}
        color='success'
        size= 'Large'
        name={props.switchName}
        checked={props.switchChecked}
        onChange={props.handleSwitchChange}
        />
    </Box>
  )
}
