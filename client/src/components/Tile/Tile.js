import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import DueList from "../../components/DueList";
import DueItem from "../../components/DueItem";
import "./Tile.css";

class Tile extends Component {
  state = {
    dues: []
  };

  // componentDidMount() => {
  //   this.getDues(this.state.category);
  // }

  calculateDueTotal = () => {
    let total = this.state.dues.reduce(function (due, value) {
      return parseInt(due.amount, 10) + value;
    });

    this.setState({total: total});
  }

  loadDues = () => {
    API.getDues(this.props.categoryName)
    .then(res =>
        this.setState({ dues: res.dues })
      )
      .catch(err => console.log(err));
  };

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
          <div className="at-tile">
            <h1 className="text-center">{this.props.tileName}</h1>
            <form>
              <Row>
                <Col size="md-5">
                  <Input
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder="Description (required)"
                  />
                </Col>

                <Col size="md-4">
                  <Input
                    value={this.state.amount}
                    onChange={this.handleInputChange}
                    name="amount"
                    placeholder="Amount (required)"
                  />
                </Col>

                <Col size="md-3">
                  <FormBtn
                    disabled={!(this.state.description && this.state.amount)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Due
                  </FormBtn>
                </Col>
              </Row>
            </form>

            {this.state.dues.length ? (
              <div>
                <DueList>
                  {this.state.dues.map(due => (
                    <DueItem description={due.description} amount={due.amount} key={due._id}/>
                  ))}
                </DueList>
                <h3>Total: {this.state.total}</h3>
              </div>
            ) : (
              <h3>No Dues to Display</h3>
            )}
          </div>
    );
  }
}

export default Tile;
