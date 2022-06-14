import { Component } from "react";
import "./LoginForm.css";

export default class SignUpForm extends Component {
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
        body: JSON.stringify({email: this.state.password, password: this.state.password })
      })
      if(!fetchResponse.ok) throw new Error('Fetch Failed - Bad Request' + fetchResponse)
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
      <div>
        <div className="form-container" onSubmit={this.handleSubmit}>
          <form autoComplete="off">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <button type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
