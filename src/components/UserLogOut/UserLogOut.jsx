import { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText} from '@mui/material'
import {Logout} from '@mui/icons-material/';

export default class UserLogOut extends Component {
  handleLogOut = () => {
    localStorage.removeItem('token');
    this.props.setUserInState(null);
  }
  render(){
    return (
      <ListItem button onClick={this.handleLogOut}>
        <ListItemIcon>
          <Logout fontSize="large" style={{ color: '#FFFFFF' }}/>
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
