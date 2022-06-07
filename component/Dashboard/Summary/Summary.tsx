import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardTitle, Badge, Button, Col, Row } from "reactstrap";

export const Summary = ({ transaction, sumOfCredit, sumOfDebit }: any) => {
  const [t, i18n] = useTranslation();
  const [query, setQuery] = useState("");

  return (
    <React.Fragment>
      <Card outline color="secondary" className="border">
        <CardBody>
          <CardTitle className="mb-4">{t("Latest Transaction")}</CardTitle>
          <Row>
            <Col lg={3}>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
              />
            </Col>
            
          </Row>
          <div className="table-responsive">
            <table className="table table-centered table-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th>{t("Sr. No")}</th>
                  <th>{t("Title")}</th>
                  <th>{t("Date")}</th>
                  <th>{t("Created By")}</th>
                  <th>{t("Status")}</th>
                  <th>{t("Credit")}</th>
                  <th>{t("Debit")}</th>
                </tr>
              </thead>
              <tbody>
                {transaction.length > 0 ? (
                  <>
                    {transaction
                      ?.filter((item: any) => {
                        if (query == "") {
                          return item;
                        } else if (
                          item.title.toLowerCase().includes(query.toLowerCase())
                        ) {
                          return item;
                        }
                      })
                      ?.map((item: any, index: number) => {
                        return (
                          <tr key={item?._id}>
                            <td>{index + 1}</td>
                            <td><Link href={`/invoice/${item._id}`}>{item?.title}</Link></td>
                            <td>{moment(item?.date).format("LL")}</td>
                            <td>{item?.created_by}</td>
                            <td>
                              <Badge
                                color={
                                  item?.status == "Credited"
                                    ? "success"
                                    : "danger"
                                }
                              >
                                {t(item?.status)}
                              </Badge>
                            </td>
                            <td>
                              {item?.status == "Credited"
                                ? (item?.amount).toLocaleString(undefined, {
                                    maximumFractionDigits: 2,
                                  })
                                : null}
                            </td>
                            <td>
                              {item?.status == "Debited"
                                ? (item?.amount).toLocaleString(undefined, {
                                    maximumFractionDigits: 2,
                                  })
                                : null}
                            </td>
                          </tr>
                        );
                      })}
                  </>
                ) : (
                  <tr>
                    <td colSpan={3}></td>
                    <td>{t("No data found")}</td>
                  </tr>
                )}
                <tr>
                  <td colSpan={5}>
                    <strong>{t("Total")}</strong>
                  </td>
                  <td>
                    <strong>
                      {sumOfCredit.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </strong>
                  </td>
                  <td>
                    <strong>
                      {sumOfDebit.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td colSpan={6}>
                    <strong>{t("Total Amount")}</strong>
                  </td>
                  <td>
                    <h5>
                      {(sumOfCredit - sumOfDebit).toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </h5>
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
