import React from 'react'
import SliderBox from '../SliderBox/SliderBox'
import './SetupMain.css'

export default function SetupMain() {
  return (
    <div className='SetupMain'>
      <h1 className='SetupName'>SliderBox</h1>
      <SliderBox className = 'OverdriveSlider' name= {'OverDrive'} />
      <SliderBox className = 'DelaySlider' name= {'Delay'} />
      <SliderBox className = 'Tremelo' name= {'Tremelo'} />
      <SliderBox className = 'Reverb' name= {'Reverb'} />
      <SliderBox className = 'Chorus' name= {'Chorus'} />
      <SliderBox className = 'Gain' name = {'Gain'} />
        
      <button className = 'startStop'>Start/Stop</button>
    </div>
  )
}
