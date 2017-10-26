import React, { Component } from "react";
import Tile from "../../components/Tile";
import { Col, Row, Container } from "../../components/Grid";

class Dashboard extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Tile tileName={"Monthly Income"} tileClass={"monthly-income"} categoryName={"monthly_income"}/>
          <Tile tileName={"Monthly Expenses"} tileClass={"monthly-expenses"} categoryName={"monthly_expenses"}/>
        </Row>
        <Row>
          <Tile tileName={"Longterm Expenses"} tileClass={"longterm-expenses"} categoryName={"longterm_expenses"}/>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
