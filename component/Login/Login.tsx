import Link from "next/link";
import React, { useState } from "react";
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";
import { InputField } from "../../core/FormField/InputField";
import { PasswordField } from "../../core/FormField/PasswordField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import lotus from "../../public/images/lotus.png";
import profileImg from "../../public/images/profile-img.png";

import Image from "next/image";
import AuthService from "../Services/AuthService/AuthService";
import { ToastUtil } from "../../shared/utils/toast";

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter the email.")
    .email("Invalid Email"),
  password: Yup.string().min(8).required("Please enter the password."),
});
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Lotus.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <Image
                        src={profileImg}
                        alt="profile"
                        className="img-fluid"
                      ></Image>
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link href="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <Image
                            src={lotus}
                            alt="lotus"
                            className="rounded-circle"
                          ></Image>
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Formik
                      initialValues={{ email: "", password: "" }}
                      validationSchema={LoginFormSchema}
                      validateOnChange={true}
                      enableReinitialize={true}
                      onSubmit={async (values: any) => {
                        AuthService.login(values)
                          .then((response: any) => {
                            localStorage.setItem(
                              "user",
                              JSON.stringify(response.data)
                            );
                            window.location.href = "/dashboard";
                            ToastUtil.success("Login Successful");
                          })
                          .catch((error: any) => {
                            ToastUtil.error("Incorrect Email and password");
                          });
                      }}
                    >
                      {({ values, errors, touched, handleChange }) => (
                        <Form>
                          <div className="mb-3">
                            <div className="form-group">
                              <InputField
                                name="email"
                                label="Email"
                                placeholder="Enter email"
                                type="email"
                                data-id="email"
                                errors={errors}
                                values={values}
                                touched={touched}
                                handleChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="form-group">
                            <PasswordField
                              name="password"
                              label="Password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter Password"
                              errors={errors}
                              values={values}
                              touched={touched}
                              handleChange={handleChange}
                            ></PasswordField>
                          </div>

                          <div className="mt-3 d-grid">
                            <button
                              className="btn btn-primary btn-block"
                              type="submit"
                            >
                              Log In
                            </button>
                          </div>

                          {/* <div className="mt-4 text-center">
                            <Link href="/forgot-password">
                              <div className="text-muted">
                                <i className="mdi mdi-lock me-1" />
                                Forgot your password?
                              </div>
                            </Link>
                          </div> */}
                        </Form>
                      )}
                    </Formik>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} Lotus. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by {`<InXcode>`}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
