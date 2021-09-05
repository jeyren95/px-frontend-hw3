import React from "react";
import PropTypes from "prop-types"
import { Label } from "components/label";
import { TextInput } from "components/text-input";
import { Field } from "components/field";


export const TextField = React.forwardRef(function({ label, id, ...inputProps}, ref) {

    return (
        <Field id={id}>
            <Label>{label}</Label>
            <TextInput 
            ref={ref}
            {...inputProps}               
            />
        </Field>

    )
})

TextField.propTypes = {
    label: PropTypes.node,
    onChange: PropTypes.func
}