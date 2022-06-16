import { Component } from 'react';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {Logout} from '@mui/icons-material/';

import './UserLogOut.css';

export default class UserLogOut extends Component {
  handleLogOut = () => {
    localStorage.removeItem('token');
    this.props.setUserInState(null);
  }
  render(){
    return (
      <ListItem button onClick={this.handleLogOut}>
        <ListItemIcon>
          <Logout fontSize="large" style={{ color: '#f7ebe9' }}/>
        </ListItemIcon>
        <ListItemText 
          primaryTypographyProps={{
            fontSize: 20,
            fontWeight: 'medium',
            color: 'text.secondary'
          }} 
          primary="Logout" 
          />
    </ListItem>
    );
  }
}
