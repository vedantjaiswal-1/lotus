import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardBody,
  CardTitle,
  Badge,
  Button,
  Col,
  Row,
  Label,
} from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputField } from "../../../core/FormField/InputField";
import TransactionService from "../../Services/TransactionService/TransactionService";
import Select from "react-select";

const IncomingSchema = Yup.object().shape({
  title: Yup.string().optional(),
  start: Yup.string().optional(),
  end: Yup.string().optional(),
});

export const Summary = ({
  transaction,
  setTransaction,
  sumOfCredit,
  sumOfDebit,
  listVendor,
  loadTransaction,
}: any) => {
  const [t, i18n] = useTranslation();
  const [query, setQuery] = useState("");
  const initialValues = {
    title: "",
    start: "",
    end: "",
  };
  return (
    <React.Fragment>
      <Card outline color="secondary" className="border">
        <CardBody>
          <CardTitle className="mb-4">
            {t("Latest Transaction")}{" "}
            <i
              className="mdi mdi-refresh float-end text-primary btn btn-light"
              onClick={() => loadTransaction()}
            ></i>
          </CardTitle>
          <Row>
            {/* <Col lg={3}>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={(event) => setQuery(event.target.value)}
              />
            </Col> */}
            <Formik
              initialValues={initialValues}
              validationSchema={IncomingSchema}
              validateOnChange={true}
              enableReinitialize={true}
              onSubmit={async (values: any, actions: any) => {
                TransactionService.transactionByDate(
                  values.start,
                  values.end,
                  values.title
                )
                  .then((response: any) => {
                    setTransaction(response);
                  })
                  .catch((error: any) => {
                    console.log(error);
                  });
                actions.resetForm();

                console.log(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                setFieldValue,
                handleBlur,
              }) => (
                <Form>
                  <Row>
                    <Col lg={2}>
                      <div className="form-group">
                        <Label>{t("Title")}</Label>
                        <Select
                          options={listVendor?.map((item: any) => {
                            return {
                              value: item?._id,
                              label: item?.name,
                            };
                          })}
                          name="title"
                          onChange={(value: any) => {
                            setFieldValue("title", value.label);
                          }}
                        />
                        {errors.title && touched.title ? (
                          <div className="text-danger small">
                            {errors.title}
                          </div>
                        ) : null}
                      </div>
                    </Col>
                    <Col lg={2}>
                      <div className="">
                        <div className="form-group">
                          <InputField
                            name="start"
                            label={t("Start")}
                            placeholder="Enter Date"
                            type="Date"
                            data-id="date-start"
                            errors={errors}
                            values={values}
                            touched={touched}
                            handleChange={handleChange}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col lg={2}>
                      <div className="">
                        <div className="form-group">
                          <InputField
                            name="end"
                            label={t("End")}
                            placeholder="Enter Date"
                            type="Date"
                            data-id="date-end"
                            errors={errors}
                            values={values}
                            touched={touched}
                            handleChange={handleChange}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col>
                    <div className="align-self-end">
                      <Button className="mt-4 w-md" type="submit">
                        Search
                      </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
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
                      // ?.filter((item: any) => {
                      //   if (query == "") {
                      //     return item;
                      //   } else if (
                      //     item.title.toLowerCase().includes(query.toLowerCase())
                      //   ) {
                      //     return item;
                      //   }
                      // })
                      ?.map((item: any, index: number) => {
                        return (
                          <tr key={item?._id}>
                            <td>{index + 1}</td>
                            <td>
                              <Link href={`/invoice/${item._id}`}>
                                {item?.title}
                              </Link>
                            </td>
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
