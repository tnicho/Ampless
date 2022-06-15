import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {Delete, Save, RemoveCircle, ContentCopy} from '@mui/icons-material/';
import { DrawerInsideDiv } from '@jon20111/drawer-inside-div'
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography';
import React from 'react'
import UserLogOut from '../UserLogOut/UserLogOut'
import "./SetupMenuBar.css"


export default function SetupMenuBar(props) {
  return (
    // <div className= 'SetupMenuBar'>
    //     SetupMenuBar
        
    //     {/* <button onClick={props.handleNewSetup}> New Blank Setup</button> */}
    //     {/* <button onClick={props.handleSetupSave}>Save</button> */}
    //     {/* <button onClick={props.handleSetupDelete}>Delete</button> */}
    //     <Button variant="contained" startIcon={<RemoveCircle />}onClick={props.handleSetupNewSetup}>Clear</Button>
    //     <Button variant="contained" startIcon={<Save />}onClick={props.handleSetupSave}>Save</Button>
    //     <Button variant="contained" startIcon={<Delete />}onClick={props.handleSetupDelete}>Delete</Button>
       
    //     <UserLogOut/>
    // </div>
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      width ={'auto'}
    >
     <List>
        <ListItem button onClick={props.handleNewSetup}>
          <ListItemIcon>
            <RemoveCircle />
          </ListItemIcon>
          <ListItemText primary="Clear" />
        </ListItem>
        <ListItem button onClick={props.handleSetupCopy}>
          <ListItemIcon>
            <ContentCopy />
          </ListItemIcon>
          <ListItemText primary="Copy" />
        </ListItem>
        <ListItem button onClick={props.handleSetupSave}>
          <ListItemIcon>
            <Save />
          </ListItemIcon>
          <ListItemText primary="Save" />
        </ListItem>
        <ListItem button onClick={props.handleSetupDelete}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </ListItem>
      </List>
      <UserLogOut setUserInState={props.setUserInState}/>
    </Box>
  )
}
