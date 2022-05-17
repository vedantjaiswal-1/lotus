import React, { useState } from "react";
import { FormFeedback, FormGroup, InputGroup, InputGroupText, Label } from "reactstrap";
import { Field } from "formik";

export const PasswordField = (props: {
  errors: any;
  touched: any;
  values: any;
  handleChange: any;
  name: string;
  placeholder?: string;
  label: string;
  type?: string;
  id?: string;
  extraAttrs?: {};
  onChange?: any;
}) => {
  const isInValid = props.touched[props.name] && props.errors[props.name];
  const type = props.type ? props.type : "text";
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <FormGroup>
        <Label>{props.label}</Label>

        <InputGroup>
          <Field
            name={props.name}
            placeholder={props.placeholder ? props.placeholder : props.label}
            className={
              " " + (type == "checkbox" ? " checkbox checked " : " form-control ") + (isInValid ? "is-invalid" : "")
            }
            valid={isInValid}
            type={showPassword ? "text" : "password"}
            value={props.values[props.name] ? props.values[props.name] : ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              console.log("onchange: ", event);
              props.handleChange(event);
            }}
            {...props?.extraAttrs}
          ></Field>

          <InputGroupText>
            {showPassword ? (
              <i className="mdi mdi-eye" onClick={() => setShowPassword(!showPassword)}></i>
            ) : (
              <i className="mdi mdi-eye-off" onClick={() => setShowPassword(!showPassword)}></i>
            )}
          </InputGroupText>
        </InputGroup>

        {isInValid && (
          <FormFeedback valid={!isInValid} className="d-block">
            {props.errors[props.name]}
          </FormFeedback>
        )}
      </FormGroup>
    </>
  );
};
