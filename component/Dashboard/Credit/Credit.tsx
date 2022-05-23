import React from "react";
import { Button, Card, CardBody, CardTitle, Col } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputField } from "../../../core/FormField/InputField";
import AuthService from "../../Services/AuthService/AuthService";
import { useTranslation } from "react-i18next";

const IncomingSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  date: Yup.string().required("Date is required"),
  amount: Yup.number().required("Amount is required")
});

export const Credit = ({ addTransaction, setCredit }: any) => {
  const initialValues = {
    title: "",
    date: "",
    status: "Credited",
    amount: "",
    created_by: AuthService.getUserName()
  };
  const [t, i18n] = useTranslation();

  return (
    <React.Fragment>
      <Col lg={6}>
        <Card outline color="success" className="border">
          <CardBody>
            <CardTitle className="text-success">{t("Add Credit")}</CardTitle>
            <Formik
              initialValues={initialValues}
              validationSchema={IncomingSchema}
              validateOnChange={true}
              enableReinitialize={true}
              onSubmit={async (values: any, actions: any) => {
                addTransaction(values);
                actions.resetForm();
                setCredit(false);
                console.log(values);
              }}
            >
              {({ values, errors, touched, handleChange }) => (
                <Form>
                  <div className="mb-3">
                    <div className="form-group">
                      <InputField
                        name="title"
                        label={t("Title")}
                        placeholder="Enter title"
                        type="text"
                        data-id="title"
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
    </React.Fragment>
  );
};
