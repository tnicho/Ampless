import './App.css';
import React, { Component } from 'react';
import { CssBaseline, Box, createTheme, ThemeProvider } from '@mui/material';
import AuthPage from "./pages/AuthPage/AuthPage";
import SetupPage from './pages/SetupPage/SetupPage';


const theme = createTheme({
  palette:{
    primary:{
      main: '#512da8',
      //light:'#b39ddb',
      light: '#ede7f6',
    },
    background:{
      //paper: '#f7ebe9'
      //default: '#f7ebe9',
      default: '#FFFFFF',
      paper: '#381f75'
    },
    text:{
      //secondary: '#f7ebe9'
      secondary: '#FFFFFF' 
    }
  }

})



export default class App extends Component {
  state ={
    user: null
  }
  
setUserInState = (incomingUserData) => {
  this.setState({user: incomingUserData})
}

componentDidMount(){
  let token = localStorage.getItem('token')
  if(token){
    const payload = JSON.parse(atob(token.split('.')[1]))
    if(payload.exp < Date.now() / 1000){
      localStorage.removeItem('token')
      token = null
    }else{
      this.setState({user: payload.user})
    }
  }
}

  render(){
    return (
      <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline/>
        {this.state.user ?
          <SetupPage setUserInState={this.setUserInState}/>
          :
          <AuthPage setUserInState={this.setUserInState} />
        }
      </Box>
      </ThemeProvider>
    );
  }
}
