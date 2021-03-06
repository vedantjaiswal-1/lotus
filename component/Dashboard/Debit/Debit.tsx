import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  FormFeedback,
  FormText,
  Label,
  Row,
} from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputField } from "../../../core/FormField/InputField";
import AuthService from "../../Services/AuthService/AuthService";
import { useTranslation } from "react-i18next";
import Select from "react-select";

const OutgoingSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  date: Yup.string().required("Date is required"),
  amount: Yup.number().required("Amount is required"),
});
export const Debit = ({ addTransaction, setDebit, listVendor }: any) => {
  const initialValues = {
    title: "",
    date: "",
    status: "Debited",
    amount: "",
    created_by: AuthService.getUserName(),
  };
  const [t, i18n] = useTranslation();

  return (
    <Col lg={6}>
      <Card outline color="danger" className="border">
        <CardBody>
          <Row>
            <Col>
              <CardTitle className="text-danger">{t("Add Debit")}</CardTitle>
            </Col>
            <Col>
              <div className="text-end">
                <Button close onClick={() => setDebit(false)}></Button>
              </div>
            </Col>
          </Row>
          <Formik
            initialValues={initialValues}
            validationSchema={OutgoingSchema}
            validateOnChange={true}
            enableReinitialize={true}
            onSubmit={async (values: any, actions: any) => {
              addTransaction(values);
              actions.resetForm();
              setDebit(false);
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
                <div className="mb-3">
                  <div className="form-group">
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
                        <div className="text-danger small">{errors.title}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-group">
                    <InputField
                      name="date"
                      label={t("Date")}
                      placeholder="Enter Date"
                      type="Date"
                      data-id="date"
                      errors={errors}
                      values={values}
                      touched={touched}
                      handleChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="form-group">
                    <InputField
                      name="amount"
                      label={t("Amount")}
                      placeholder="Enter amount"
                      type="number"
                      data-id="amount"
                      errors={errors}
                      values={values}
                      touched={touched}
                      handleChange={handleChange}
                    />
                  </div>
                </div>

                <div className="d-grid">
                  <Button color="primary" type="submit">
                    {t("Submit")}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </Col>
  );
};
