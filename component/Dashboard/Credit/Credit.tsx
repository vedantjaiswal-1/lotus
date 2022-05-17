import React from "react";
import { Button, Card, CardBody, CardTitle, Col } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputField } from "../../../core/FormField/InputField";

const IncomingSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  date: Yup.string().required("Date is required"),
  amount: Yup.number().required("Amount is required")
});

export const Credit = ({ addTransaction }: any) => {
  const initialValues = {
    id: null,
    title: "",
    date: "",
    status: "Credited",
    amount: "",
  };
  return (
    <React.Fragment>
      <Col lg={6}>
        <Card outline color="success" className="border">
          <CardBody>
            <CardTitle className="text-success">Credit</CardTitle>
            <Formik
              initialValues={initialValues}
              validationSchema={IncomingSchema}
              validateOnChange={true}
              enableReinitialize={true}
              onSubmit={async (values: any) => {
                addTransaction(values);
                console.log(values);
              }}
            >
              {({ values, errors, touched, handleChange }) => (
                <Form>
                  <div className="mb-3">
                    <div className="form-group">
                      <InputField
                        name="title"
                        label="Title"
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
                        label="Date"
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
                        label="Amount"
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
                      Submit
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
