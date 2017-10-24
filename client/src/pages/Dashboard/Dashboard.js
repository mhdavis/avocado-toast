import React, { Component } from "react";
import Tile from "../../components/Tile";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Tile tileName={"Monthly Income"} categoryName={"monthly_income"}/>
        <Tile tileName={"Monthly Expenses"} categoryName={"monthly_expenses"}/>
        <Tile tileName={"Longterm Expenses"} categoryName={"longterm_expenses"}/>
      </div>
    );
  }
}

export default Dashboard;
