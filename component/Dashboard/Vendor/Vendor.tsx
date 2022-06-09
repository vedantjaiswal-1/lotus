import React from "react";
import { Button, Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { InputField } from "../../../core/FormField/InputField";

const VendorSchema = Yup.object().shape({
  name: Yup.string().required("Vendor is required"),
});

export const Vendor = ({ setVendor, addVendor }: any) => {
  const initialValues = {
    name: "",
  };
  const [t, i18n] = useTranslation();
  return (
    <React.Fragment>
      <Col lg={6}>
        <Card outline color="primary" className="border">
          <CardBody>
            <Row>
              <Col>
                <CardTitle className="text-primary">
                  {t("Add Vendor")}
                </CardTitle>
              </Col>
              <Col>
                <div className="text-end">
                  <Button close onClick={() => setVendor(false)}></Button>
                </div>
              </Col>
            </Row>
            <Formik
              initialValues={initialValues}
              validationSchema={VendorSchema}
              validateOnChange={true}
              enableReinitialize={true}
              onSubmit={async (values: any, actions: any) => {
                addVendor(values);
                actions.resetForm();
                console.log(values);
              }}
            >
              {({ values, errors, touched, handleChange }) => (
                <Form>
                  <div className="mb-3">
                    <div className="form-group">
                      <InputField
                        name="name"
                        label={t("Vendor")}
                        placeholder={t("Enter vendor")}
                        type="text"
                        data-id="vendor"
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
