import { Box, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import {Delete, Save, RemoveCircle, ContentCopy} from '@mui/icons-material/';
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography';
import React from 'react'
import UserLogOut from '../UserLogOut/UserLogOut'


export default function SetupMenuBar(props) {
  return (

      <Drawer
        variant="permanent"
        anchor="left"
      >
        <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
        <Box><Typography sx={{ml: 2, mr: 2}} color='text.secondary' variant = 'h3'>AMPLESS</Typography>
        <List>
          <ListItem
            sx={{mt: 2, mb: 2, "&:hover": {backgroundColor: "#7e57c2", color: "white",}} }
            button  
            onClick={props.handleNewSetup}
            >
            <ListItemIcon >
              <RemoveCircle fontSize="large" style={{ color: '#FFFFFF' }}/>
            </ListItemIcon>
            <ListItemText
             primaryTypographyProps={{
                fontSize: 20,
                fontWeight: 'medium',
                color: 'text.secondary'
              }} 
            primary="New" 
            />
          </ListItem>
          <ListItem 
            sx={{mt: 2, mb: 2, "&:hover": {backgroundColor: "#7e57c2", color: "white",}}} 
            button 
            onClick={props.handleSetupCopy}>
            <ListItemIcon>
              <ContentCopy fontSize="large" style={{ color: '#FFFFFF' }}/>
            </ListItemIcon>
            <ListItemText 
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: 'medium',
                color: 'text.secondary'
              }} 
              primary="Copy" 
            />
          </ListItem>
          <ListItem 
            sx={{mt: 2, mb: 2, "&:hover": {backgroundColor: "#7e57c2", color: "white",}}} 
            button 
            onClick={props.handleSetupSave}>
            <ListItemIcon>
              <Save fontSize="large" style={{ color: '#FFFFFF' }}/>
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: 'medium',
                color: 'text.secondary'
              }} 
              primary="Save" 
            />
          </ListItem>
          <ListItem 
            sx={{mt: 2, mb: 2, "&:hover": {backgroundColor: "#7e57c2", color: "white",}}} 
            button 
            onClick={props.handleSetupDelete}>
            <ListItemIcon>
              <Delete fontSize="large" style={{ color: '#FFFFFF' }}/>
            </ListItemIcon>
            <ListItemText 
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: 'medium',
                color: 'text.secondary'
              }}
               
              primary="Delete" 
            />
          </ListItem>
        </List>
        </Box>
        <Box sx={{mb: 4}}>
          <UserLogOut setUserInState={props.setUserInState}/>
        </Box>
        </Box>
      </Drawer>
  )
}
