import { Component } from "react";
import { Box, Container, Button, Typography, TextField, Avatar } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';


export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const fetchResponse = await fetch('/api/users/signup', {
        method: 'POST',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify({ name: this.state.name, email: this.state.email, password: this.state.password })
      })
      if(!fetchResponse.ok) throw new Error('Fetch Failed - Bad Request' + fetchResponse.status)
      let token = await fetchResponse.json()
      localStorage.setItem('token', token)
      const userDoc = JSON.parse(atob(token.split('.')[1])).user
      this.props.setUserInState(userDoc)
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = ((this.state.name==="")||(this.state.email==="")||(this.state.password==="")||(this.state.password !== this.state.confirm));
    return (
      <Container component="main">
        <Box       
          sx={{
          display:"flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 1
          }} 
          component="form" 
          onSubmit={this.handleSubmit}
          >
            <Avatar sx={{ m: 1, bgcolor: 'background.paper' }} style={{maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px'}}>
              {<LockIcon style={{maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px'}}/>}
            </Avatar>
            <Typography sx={{my: 1}} variant = "h4">Sign up</Typography>
            <TextField
              sx={{width: '445px', my:1}}
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              value={this.state.name}
              onChange={this.handleChange}
              required
              autofocus
            />
            <TextField
              sx={{width: '445px', mt:3}}
              id="email"
              name="email"
              placeholder="Email Address"
              autoComplete="off"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <TextField
              sx={{width: '445px', mt:4}}
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="off"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <TextField
              sx={{width: '445px', mt:4}}
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <Button sx={{width: '445px', mt: 5}} style={{fontSize: '20px'}} variant="contained" type="submit" disabled={disable}>
              SIGN UP
            </Button>
          </Box>
        <Typography>&nbsp;{this.state.error}</Typography>
      </Container>
    );
  }
}
