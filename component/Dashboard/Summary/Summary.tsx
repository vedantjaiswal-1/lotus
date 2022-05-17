import React from "react";
import { Card, CardBody, CardTitle, Badge, Button } from "reactstrap";


export const Summary = ({transaction}: any) => {
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
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {transaction?.map((item: any, index: number) => {
                  return (
                    <tr key={item?.id}>
                      <td>{index + 1}</td>
                      <td>{item?.title}</td>
                      <td>{item?.date}</td>
                      <td><Badge color={item?.status == "incoming" ? "success" : "danger"}>{item?.status}</Badge></td>
                      <td>{item?.amount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};
