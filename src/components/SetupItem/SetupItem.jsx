import { ExpandMore } from '@mui/icons-material'
import {Accordion, Button, AccordionSummary, AccordionDetails, Typography, CssBaseline} from '@mui/material'
import React from 'react'
import './SetupItem.css'

export default function SetupItem(props) {
  return (
    // <div className="SetupItem" >
    //     SetupItem
    //     <br/>
    //     <label>name: {props.setup.name}</label><br/>
    //     <label>id: {props.setup._id}</label><br/>
    //     <label>overdrive: {props.setup.overdrive}</label><br/>
    //     <label>delay: {props.setup.delay}</label><br/>
    //     <button onClick={() => props.handleSetupSelect(props.setup)}>Open Setup</button>
    // </div>

    <Accordion  >
      <AccordionSummary
        sx={{
          backgroundColor: "primary.light"
        }}
       expandIcon={<ExpandMore/>}
      >
        <Typography >{props.setup.name}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{backgroundColor: "primary.light"}}>
        <Typography >id: {props.setup._id}</Typography>
        <Typography >Overdrive: {props.setup.overdrive}</Typography>
        <Typography >Delay: {props.setup.delay}</Typography>
        <Button onClick={() => props.handleSetupSelect(props.setup)}>Open Setup</Button>
      </AccordionDetails>
    </Accordion>

  )
}
