import { Component } from "react";
import "./Logo.css";
import Form from 'react-bootstrap/Form';

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
      alert("hello! i'm an alert!");
      const fetchResponse = await fetch('/api/users/signup', {
        method: 'POST',
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify({email: this.state.password, password: this.state.password })
      })

      if(!fetchResponse.ok) throw new Error('Fetch Failed - Bad Request' + fetchResponse)

      let token = await fetchResponse.json()

      localStorage.setItem('token', token)

      const userDoc = JSON.parse(atob(token.split('.')[1])).user
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
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
