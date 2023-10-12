import { useState } from "react";

type FormInputComponentProps = {
    label: string,
    type: string,
    name: string,
    value: string,
    onChange: Function,
    placeholder?: string,
    isError: boolean,
    errorMessage: string,
    required?: boolean,
}
const FormInputComponent = ({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
    isError,
    errorMessage,
    required,
}: FormInputComponentProps) => {
    return(
        <div className="form-group">
            <label>{label}</label>
            <input
                type={type}
                className={`form-control ${isError && 'is-invalid'}`}
                name={name}
                id={name}
                aria-describedby="fullNameHelp"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
                required={required}
            />
            <div className="invalid-feedback">{errorMessage}</div>
        </div>
    );
}

export default FormInputComponent;