import React from 'react'
import EditableLabel from 'react-inline-editing'
// import ContentEditable from 'react-contenteditable'
import SliderBox from '../SliderBox/SliderBox'
import './SetupMain.css'

export default function SetupMain(props) {


  return (
    <div className='SetupMain'>
      {/* <EditableLabel className='SetupName' labelFontSize = '50px' inputFontSize = '50px' inputWidth = '30vw' inputHeight = '50px' text={props.name} onFocusOut={props.handleTitleChange}/><br/> */}
      <label className='NameLabel'>{props.name}</label><br/>
      <SliderBox className = 'OverdriveSlider' title = {'Overdrive'} name= {'overdrive'} setupNum={props.overdrive} handleChange = {props.handleChange}/>
      <SliderBox className = 'DelaySlider' title= {'delay'} name = {'delay'} setupNum={props.delay} handleChange = {props.handleChange}/>
      <SliderBox className = 'Tremelo' title= {'Tremelo'} />
      <SliderBox className = 'Reverb' title= {'Reverb'} />
      <SliderBox className = 'Chorus' title= {'Chorus'} />
      <SliderBox className = 'Gain' title = {'Gain'} />
    
      <button className = 'startStop'>Start/Stop</button>
    </div>
  )
}
