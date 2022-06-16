import { Box, Container, Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField'
import { Component } from "react";
import "./LoginForm.css";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
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
      const fetchResponse = await fetch('/api/users/login', {
        method: 'POST',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify({email: this.state.email, password: this.state.password })
      })
      if(!fetchResponse.ok) throw new Error('Fetch Failed - Bad Request')
      let token = await fetchResponse.json()
      localStorage.setItem('token', token)
      const userDoc = JSON.parse(atob(token.split('.')[1])).user
      this.props.setUserInState(userDoc)
    } catch (err) {
      console.log("LoginForm error", err);
      this.setState({ error: "Log in Failed - Try Again" });
    }

    
  };

  render() {
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
            <Typography sx={{my: 1}} variant = "h4">Email</Typography>
            <TextField
              sx={{width: '445px'}}
              id="email"
              name="email"
              placeholder="Email Address"
              label="Email Address"
              autoComplete="off"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <Typography sx={{my: 1}} variant = "h4">Password</Typography>
            <TextField
              sx={{width: '445px'}}
              type="password"
              placeholder="Password"
              label="Password"
              name="password"
              autoComplete="off"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <Button sx={{width: '445px', mt: 5}} style={{fontSize: '20px'}} variant="contained" type="submit">LOG IN</Button>
        </Box>
        <Typography>&nbsp;{this.state.error}</Typography>
      </Container>


      //  <div>
      //    <div className="form-container" onSubmit={this.handleSubmit}>
      //      <form autoComplete="off">
      //        <label>Email</label>
      //        <input
      //          type="text"
      //          name="email"
      //          value={this.state.email}
      //          onChange={this.handleChange}
      //          required
      //        />
      //        <label>Password</label>
      //        <input
      //          type="password"
      //          name="password"
      //          value={this.state.password}
      //          onChange={this.handleChange}
      //          required
      //        />
      //        <button type="submit">LOG IN</button>
      //      </form>
      //    </div>
      //    <p className="error-message">&nbsp;{this.state.error}</p>
      // </div>
    );
  }
}
