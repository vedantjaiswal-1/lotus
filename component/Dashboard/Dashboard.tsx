import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import { Header } from "../Layout/Header";
import { Incoming } from "./Incoming/Incoming";
import { Outgoing } from "./Outgoing/Outgoing";
import { Summary } from "./Summary/Summary";

const transaction = [
    {
      id: 1,
      title: "Lawn Booking",
      date: "02/12/2021",
      status: "incoming",
      amount: "100000"
    },
    {
      id: 2,
      title: "Hall Booking",
      date: "04/12/2021",
      status: "incoming",
      amount: "200000"
    },
    {
      id: 3,
      title: "Lightning",
      date: "02/12/2021",
      status: "outgoing",
      amount: "50000"
    }
  ];

export const Dashboard = () => {
  return (
    <React.Fragment>
        <Header></Header>
      <div className="page-content">
        <Container>
          <Row>
            <Incoming />
            <Outgoing />
          </Row>

          <Summary transaction={transaction} />
        </Container>
      </div>
    </React.Fragment>
  );
};
