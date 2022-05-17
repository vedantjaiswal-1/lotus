import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { Header } from "../Layout/Header";
import { Credit } from "./Credit/Credit";
import { Debit } from "./Debit/Debit";
import { Summary } from "./Summary/Summary";

const transaction = [
  {
    id: 1,
    title: "Lawn Booking",
    date: "02-12-2021",
    status: "Credited",
    amount: 100000
  },
  {
    id: 2,
    title: "Hall Booking",
    date: "04-12-2021",
    status: "Credited",
    amount: 200000
  },
  {
    id: 3,
    title: "Lightning",
    date: "02-12-2021",
    status: "Debited",
    amount: 50000
  }
];

export const Dashboard = () => {
  const [transact, setTransact] = useState(transaction);
  const addTransaction = (add: any) => {
    add.id = transact.length + 1;
    setTransact([...transact, add]);
  };

  let sumOfCredit = 0;
  let sumOfDebit = 0;

  transaction.forEach((item: any) => {
    const CreditAmount = item?.status == "Credited" ? item?.amount : null;
    sumOfCredit += CreditAmount;
    
  });

  transaction.forEach((item: any) => {
    const DebitAmount = item?.status == "Debited" ? item?.amount : null;
    sumOfDebit += DebitAmount;
  });
  
  return (
    <React.Fragment>
      <Header></Header>
      <div className="page-content">
        <Container>
          <Row>
            <Credit addTransaction={addTransaction} />
            <Debit addTransaction={addTransaction} />
          </Row>

          <Summary transaction={transact} sumOfCredit={sumOfCredit} sumOfDebit={sumOfDebit} />
        </Container>
      </div>
    </React.Fragment>
  );
};
