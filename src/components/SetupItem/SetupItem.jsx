import { ExpandMore } from '@mui/icons-material'
import {Accordion, Button, AccordionSummary, AccordionDetails, Typography} from '@mui/material'
import React from 'react'

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
        <Typography >Reverb: {props.setup.reverbOn ? "On" : "Off"}</Typography>
        <Button onClick={() => props.handleSetupSelect(props.setup)}>Open Setup</Button>
      </AccordionDetails>
    </Accordion>

  )
}
