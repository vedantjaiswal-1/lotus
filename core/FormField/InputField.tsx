import React from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import { Field } from "formik";

export const InputField = (props: {
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
  disabled?: boolean
}) => {
  const isInValid = props.touched[props.name] && props.errors[props.name];
  const type = props.type ? props.type : "text";

  return (
    <>
      <FormGroup>
        <Label>{props.label}</Label>

        <Field
          name={props.name}
          placeholder={props.placeholder ? props.placeholder : props.label}
          className={
            " " +
            (type == "checkbox" ? " checkbox checked " : " form-control ") +
            (isInValid ? "is-invalid" : "")
          }
          valid={isInValid}
          type={type}
          value={props.values[props.name] ? props.values[props.name] : ""}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            console.log("onchange: ", event)
            props.handleChange(event);
          }}
          {...props?.extraAttrs}
          disabled={props.disabled}
        ></Field>

        {isInValid && (
          <FormFeedback valid={!isInValid} className="d-block">
            {props.errors[props.name]}
          </FormFeedback>
        )}
      </FormGroup>
    </>
  );
};
