import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  this.handleLoginSubmit.bind(this);
  this.onChange.bind(this);

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    axios.post("/signin", {
      username: this.state.username,
      password: this.state.password
    }, (err, res) => {
      if (err) {
        this.setState( {errorMessage: "Authentication Failed"} );
        return;
      }
      localStorage.setItem('token', res.body.token);
      this.setState();
    });
  }

  
  isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token && token.length > 10;
  }

  render() {
    const isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <div>
      { isAlreadyAuthenticated ? <Redirect to={{
        pathname: './app'}}
      } : (
        <form onSubmit={this.handleLoginSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={this.onChange} />
          <label>Password:<label>
          <input type="password" name="password" value={this.state.username} onChange={this.onChange} />
          <input type="submit" value="Submit" />
        </form>
      )
      </div>
    );
  }

  }
}

export default LoginForm;
