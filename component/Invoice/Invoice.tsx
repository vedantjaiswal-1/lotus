import React from "react";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import lotus from "../../public/images/lotus.png";
import { Header } from "../Layout/Header";
import Image from "next/image";
import moment from "moment";

export const Invoice = ({ transaction }: any) => {
  const printInvoice = () => {
    window.print();
  };

  return (
    <React.Fragment>
      <Header></Header>
      <div className="page-content">
        <Container build>
          <Row>
            <div className="d-print-none">
              <div className="float-end">
                <div className="btn btn-success mb-4" onClick={printInvoice}>
                  <i className="fa fa-print" /> <strong>Print</strong>
                </div>
              </div>
            </div>
            <Col lg="12">
              <Card>
                <CardBody>
                  <div className="invoice-title">
                    <div className="float-end">
                      <h5>Transaction Id</h5>
                      <p>{transaction?._id}</p>
                    </div>

                    <div>
                      <Image
                        src={lotus}
                        alt="logo"
                        height="100px"
                        width="100px"
                        className="img-fluid avatar-sm"
                      />
                    </div>
                  </div>
                  <hr />
                  <Row>
                    <Col xs="6">
                      <address>
                        <strong>Billed to:</strong>
                        <br />
                        <span>{transaction?.title}</span>
                        <br />
                      </address>
                    </Col>
                    <Col xs="6" className="text-end">
                      <address>
                        <strong>Date:</strong>
                        <br />
                        {moment(transaction?.date).format("LL")}

                        <br />
                        <br />
                      </address>
                    </Col>
                  </Row>
                  <Row></Row>
                  <div className="py-2 mt-3">
                    <h3 className="font-size-15 fw-bold">
                      Transaction summary
                    </h3>
                  </div>
                  <div className="table-responsive">
                    <Table className="table-nowrap">
                      <thead>
                        <tr>
                          <th style={{ width: "70px" }}>Sr. No</th>
                          <th>Title</th>
                          <th>Status</th>
                          <th className="text-end">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>{transaction?.title}</td>
                          <td>{transaction?.status}</td>
                          <td className="text-end">{transaction?.amount}</td>
                        </tr>

                        <tr>
                          <td colSpan={3} className=" text-end">
                            <strong>Total</strong>
                          </td>
                          <td className="border-0 text-end">
                            <h4 className="m-0">{transaction?.amount}</h4>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
