import React from "react";
import PropTypes from "prop-types"
import { Label } from "components/label";
import { TextInput } from "components/text-input";
import { Field } from "components/field";


export const TextField = ({ label, id, ...inputProps}) => {

    return (
        <Field id={id}>
            <Label>{label}</Label>
            <TextInput 
            {...inputProps}               
            />
        </Field>

    )
}

TextField.propTypes = {
    label: PropTypes.node,
    onChange: PropTypes.func
}