import React from 'react'
import {Drawer, Typography, Box, Divider} from '@mui/material'
import './SetupIndex.css'
import SetupItem from '../SetupItem/SetupItem'

export default function SetupIndex(props) {

  return (
    <Drawer
    variant="permanent"
    anchor="right"
    background="secondary.main"
  >
    <Box
      sx={{display: 'flex', justifyContent: 'center', mb: 5}}
    >
      <Typography color= 'text.secondary' variant='h5'>Saved Setups</Typography>
      <Divider/>
    </Box>
    {props.setups.map(su => 
      <SetupItem key={su._id} setup={su} handleSetupSelect={props.handleSetupSelect}/>)}
    </Drawer>
  )
}
