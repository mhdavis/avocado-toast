import React, { Component } from "react";
import EditBtn from "../../component/EditBtn";
import DeleteBtn from "../../components/DeleteBtn";


class DueItem extends Component {
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
        <p>{props.description}</p>
        <p>{props.amount}</p>
        <EditBtn onClick={() => this.editDue(due._id)} />
        <DeleteBtn onClick={() => this.deleteDue(due._id)} />
      </li>
    );
  }
}

export default DueItem;
