import React from "react";
import { Box, Link } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Header from "../../components/Header/Header";

export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
      <Box
      sx={{
        display:"flex",
        flexDirection: "column",
        alignItems: "center"
      }}
      >
        <Box>
          <Header/>
        </Box>
        {this.state.showLogin ? (
          <LoginForm setUserInState={this.props.setUserInState} />
        ) : (
          <SignUpForm setUserInState={this.props.setUserInState} />
        )}
          <Link
            onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
            {this.state.showLogin ? "Don't have an account? Sign up" : " Already a user? Login"}
          </Link>
      </Box>
    );
  }
}
