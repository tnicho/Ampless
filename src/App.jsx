import './App.css';
import { Component } from 'react';
import AuthPage from "./pages/AuthPage/AuthPage";

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <AuthPage setUserInState={this.setUserInState} />
      </div>
    );
  }
}
