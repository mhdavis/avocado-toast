import React from "react";
import "./longterm-expenses.css";
import "./monthly-expenses.css";
import "./monthly-income.css";

const Jumbotron = (props) =>
  (
    <div style={{ height: 250 }} className={`jumbotron ${props.jumboClass}-jumbo`}>
      {props.children}
    </div>
  );

export default Jumbotron;
