import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header'
import AuthPage from "./pages/AuthPage/AuthPage";
import SetupPage from './pages/SetupPage/SetupPage';

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
      <div className="App">
        <Header />
        {this.state.user ?
          <SetupPage/>
          :
          <AuthPage setUserInState={this.setUserInState} />
        }
        
      </div>
    );
  }
}
