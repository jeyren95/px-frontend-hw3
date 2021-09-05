import React from "react";
import PropTypes from "prop-types";
import { FieldContext } from "components/field-context";

export const TextInput = React.forwardRef(function({   ...props }, ref) {
    const id = React.useContext(FieldContext)

    return (
        <div className="mt-1">
            <input 
            {...props}
            id={id}
            ref={ref}
            className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" 
            />
        </div>
    )
})


TextInput.propTypes = {
    onChange: PropTypes.func,
}