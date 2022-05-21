import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { ToastUtil } from "../../shared/utils/toast";
import { Header } from "../Layout/Header";
import TransactionService from "../Services/TransactionService/TransactionService";
import { Credit } from "./Credit/Credit";
import { Debit } from "./Debit/Debit";
import { Summary } from "./Summary/Summary";

export const Dashboard = () => {
  const [transaction, setTransaction] = useState([]);

  const loadTransaction = () => {
    TransactionService.listTransaction()
      .then((response: any) => {
        setTransaction(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadTransaction();
  }, []);

  const addTransaction = (data: any) => {
    TransactionService.AddTransaction(data)
      .then((response: any) => {
        loadTransaction();
        ToastUtil.success("Transaction Success")
      })
      .catch((error: any) => {
        console.log(error);
      });
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

          <Summary transaction={transaction} sumOfCredit={sumOfCredit} sumOfDebit={sumOfDebit} />
        </Container>
      </div>
    </React.Fragment>
  );
};
