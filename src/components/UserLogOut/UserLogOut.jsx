import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

import './UserLogOut.css';

export default function UserLogOut({ props}) {
  // function handleLogOut() {
  //   localStorage.removeItem('token');
  //   this.props.setUserInState(null);
  // }

  return (
    // <div className="UserLogOut">
    //   {/* <div>{user.name}</div>
    //   <div className="email">{user.email}</div>
    //   <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button> */}
    //   {/* <button>Logout</button> */}
    //   {/* <Button variant="contained" startIcon={<LogoutIcon />}>LogOut</Button> */}

    // </div>
    <ListItem button>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
  </ListItem>
  );
}
