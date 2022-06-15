import React from 'react'
import {Slider, Typography} from '@mui/material'
import './SliderBox.css'


export default function SliderBox(props) {
  return (
    <div className='SliderBox'>
      <Typography variant='h4'>{props.title} : {props.setupNum}</Typography>
        <Slider
          className = 'SetupSlider'
          sx={{
            paddingTop: 5,
            width: 400,
            height: 20,
            '& .MuiSlider-thumb': {height: 40, width: 40}
          }}
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
    </div>
  )
}
