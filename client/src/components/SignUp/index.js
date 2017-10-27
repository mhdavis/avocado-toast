import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DueList from "../../components/DueList";
import DueItem from "../../components/DueItem";

class SignInForm extends Component {
  state = {
    category: this.props.categoryName,
    dues: []
  };

  // componentDidMount() => {
  //   this.getDues(this.state.category);
  // }

  // loadDues = () => {
  //   API.getDues(this.state.category)
  //   .then(res =>
  //       this.setState({ dues: res.dues })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name , value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.createDue(this.state.category, {
      description: this.state.description,
      amount: this.state.amount
    })
    .then(res => this.getDues())
    .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">

            <form>
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username"
              />
              <Input
                value={this.state.amount}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password"
              />
              <Input
                value={this.state.amount}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Name"
              />
              <FormBtn
                disabled={!(this.state.description && this.state.amount)}
                onClick={this.handleFormSubmit}
              >
                Sign-In
              </FormBtn>
            </form>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignInForm;
