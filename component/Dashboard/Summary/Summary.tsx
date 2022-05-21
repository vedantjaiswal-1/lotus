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
                          <td>
                            <Badge color={item?.status == "Credited" ? "success" : "danger"}>{item?.status}</Badge>
                          </td>
                          <td>{item?.status == "Credited" ? item?.amount : null}</td>
                          <td>{item?.status == "Debited" ? item?.amount : null}</td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <tr>
                    <td colSpan={3}></td>
                    <td>Empty</td>
                  </tr>
                )}
                <tr>
                  <td colSpan={4}>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>{sumOfCredit}</strong>
                  </td>
                  <td>
                    <strong>{sumOfDebit}</strong>
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
