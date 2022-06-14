import React from 'react'
import EditableLabel from 'react-inline-editing'
import SliderBox from '../SliderBox/SliderBox'
import './SetupMain.css'

export default class SetupMain extends React.Component(props) {

  handleTitleChange = async (text) => {
    props.handleChange({name: 'name', value: text } )
  }
  render(){
    return (
      <div className='SetupMain'>
        <EditableLabel className='SetupName' text={props.name} onFocusOut={handleTitleChange()}/><br/>
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
}
