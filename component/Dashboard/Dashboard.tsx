import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import { ToastUtil } from "../../shared/utils/toast";
import { Header } from "../Layout/Header";
import TransactionService from "../Services/TransactionService/TransactionService";
import { Credit } from "./Credit/Credit";
import { Debit } from "./Debit/Debit";
import { Summary } from "./Summary/Summary";

export const Dashboard = () => {
  const [transaction, setTransaction] = useState([]);
  const [credit, setCredit] = useState(false);
  const [debit, setDebit] = useState(false);

  const loadTransaction = () => {
    TransactionService.listTransaction()
      .then((response: any) => {
        setTransaction(response);
      })
      .catch((error: any) => {
        ToastUtil.error(error.message);
        console.log(error);
        error.response.status == 401 ? (window.location.href = "/") : null;
      });
  };

  useEffect(() => {
    loadTransaction();
  }, []);

  const addTransaction = (data: any) => {
    TransactionService.AddTransaction(data)
      .then((response: any) => {
        loadTransaction();
        ToastUtil.success("Transaction Success");
      })
      .catch((error: any) => {
        ToastUtil.error(error.message);
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
          <div className="mb-4 button-items">
            <Button color="success" outline onClick={() => setCredit(!credit)}>
              Credit
            </Button>{" "}
            <Button color="danger" outline onClick={() => setDebit(!debit)}>
              Debit
            </Button>
          </div>
          <Row>
            {credit ? <Credit addTransaction={addTransaction} setCredit={setCredit} /> : null}
            {debit ? <Debit addTransaction={addTransaction} setDebit={setDebit} /> : null}
          </Row>

          <Summary transaction={transaction} sumOfCredit={sumOfCredit} sumOfDebit={sumOfDebit} />
        </Container>
      </div>
    </React.Fragment>
  );
};
