import React, { Component } from "react";
import Tile from "../../components/Tile";
import { Col, Row, Container } from "../../components/Grid";

class Dashboard extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Tile tileName={"Monthly Income"} tileClass={"monthly-income"} categoryName={"monthly_income"}/>
          </Col>
          <Col size="md-6">
            <Tile tileName={"Monthly Expenses"} tileClass={"monthly-expenses"} categoryName={"monthly_expenses"}/>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Tile tileName={"Longterm Expenses"} tileClass={"longterm-expenses"} categoryName={"longterm_expenses"}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
