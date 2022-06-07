import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Invoice } from "../../component/Invoice/Invoice";
import TransactionService from "../../component/Services/TransactionService/TransactionService";
import { isUUID } from "../../shared/utils/validation.utils";

export type uuid = string;

const InvoceById = () => {
  const [transaction, setTransaction] = useState();

  const router = useRouter();
  const { id } = router.query;

  const loadTransaction = (id: any) => {
    TransactionService.transactionById(id)
      .then((response: any) => {
        setTransaction(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (typeof id === "string") {
      loadTransaction(id);
    }
  }, [id]);

  return (
    <React.Fragment>
      <Invoice transaction={transaction} />
    </React.Fragment>
  );
};

export default InvoceById;
