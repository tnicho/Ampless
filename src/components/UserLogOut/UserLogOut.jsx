import { Component } from 'react';
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

import './UserLogOut.css';

export default class UserLogOut extends Component {
  handleLogOut = () => {
    localStorage.removeItem('token');
    this.props.setUserInState(null);
  }
  render(){
    return (
      // <div className="UserLogOut">
      //   {/* <div>{user.name}</div>
      //   <div className="email">{user.email}</div>
      //   <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button> */}
      //   {/* <button>Logout</button> */}
      //   {/* <Button variant="contained" startIcon={<LogoutIcon />}>LogOut</Button> */}

      // </div>
      <ListItem button onClick={this.handleLogOut}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
    </ListItem>
    );
  }
}
