import React, { Component } from "react";
import EditBtn from "../../components/EditBtn";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";


class DueItem extends Component {
  state = {
    key: this.props.key,
    description: this.props.description,
    amount: this.props.amount
  }

  deleteDue = () => {
    API.deleteDue()
    .then(res => {});
  }

  editDue = () => {
    API.editDue()
    .then(res => {});
  }

  render() {
    return (
      <li>
        <p>{this.props.description}</p>
        <p>{this.props.amount}</p>
        <EditBtn onClick={() => this.editDue(this.state.key)} />
        <DeleteBtn onClick={() => this.deleteDue(this.state.key)} />
      </li>
    );
  }
}

export default DueItem;
