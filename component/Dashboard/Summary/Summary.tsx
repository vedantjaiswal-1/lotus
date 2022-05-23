import moment from "moment";
import React from "react";
import { Card, CardBody, CardTitle, Badge, Button } from "reactstrap";

export const Summary = ({ transaction, sumOfCredit, sumOfDebit }: any) => {
  return (
    <React.Fragment>
      <Card outline color="secondary" className="border">
        <CardBody>
          <CardTitle className="mb-4">Latest Transaction</CardTitle>
          <div className="table-responsive">
            <table className="table table-centered table-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th>Sr. No</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Created By</th>
                  <th>Status</th>
                  <th>Credit</th>
                  <th>Debit</th>
                </tr>
              </thead>
              <tbody>
                {transaction.length > 0 ? (
                  <>
                    {transaction?.map((item: any, index: number) => {
                      return (
                        <tr key={item?._id}>
                          <td>{index + 1}</td>
                          <td>{item?.title}</td>
                          <td>{moment(item?.date).format("LL")}</td>
                          <td>{item?.created_by}</td>
                          <td>
                            <Badge color={item?.status == "Credited" ? "success" : "danger"}>{item?.status}</Badge>
                          </td>
                          <td>{item?.status == "Credited" ? (item?.amount).toLocaleString(undefined, { maximumFractionDigits: 2 }) : null}</td>
                          <td>{item?.status == "Debited" ? (item?.amount).toLocaleString(undefined, { maximumFractionDigits: 2 }) : null}</td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <tr>
                    <td colSpan={3}></td>
                    <td>No data found</td>
                  </tr>
                )}
                <tr>
                  <td colSpan={5}>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>{(sumOfCredit).toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
                  </td>
                  <td>
                    <strong>{(sumOfDebit).toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
                  </td>
                </tr>
                <tr>
                  <td colSpan={6}>
                    <strong>Total Amount</strong>
                  </td>
                  <td>
                    <h5>{(sumOfCredit - sumOfDebit).toLocaleString(undefined, { maximumFractionDigits: 2 })}</h5>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};
