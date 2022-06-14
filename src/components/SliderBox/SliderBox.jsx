import React from 'react'
import './SliderBox.css'


export default function SliderBox(props) {
  return (
    <div className='SliderBox'>
          <label>{props.title} : {props.setupNum}</label>
          <input type="number" name = {props.name} min='0' max = '10' value = {props.setupNum} onChange={props.handleChange}/>
    </div>
  )
}
