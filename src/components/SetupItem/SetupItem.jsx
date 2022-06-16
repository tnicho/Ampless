import { ExpandMore } from '@mui/icons-material'
import {Accordion, Button, AccordionSummary, AccordionDetails, Typography, CssBaseline} from '@mui/material'
import React from 'react'
import './SetupItem.css'

export default function SetupItem(props) {
  return (
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
        <Typography >Overdrive: {props.setup.overdrive}</Typography>
        <Typography >Delay: {props.setup.delay}</Typography>
        <Typography >GainBoost: {props.setup.gainBoost}</Typography>
        <Button onClick={() => props.handleSetupSelect(props.setup)}>Open Setup</Button>
      </AccordionDetails>
    </Accordion>

  )
}
