import React from 'react'
import {Box, Typography} from '@mui/material'
import './SetupIndex.css'
import SetupItem from '../SetupItem/SetupItem'

export default function SetupIndex(props) {

  return (
    <Box 
    >
    <Typography>Saved Setups</Typography>
    {props.setups.map(su => 
      <SetupItem key={su._id} setup={su} handleSetupSelect={props.handleSetupSelect}/>)}
    </Box>
  )
}
