import React from "react";
import PropTypes from "prop-types";
import { FieldContext } from "components/field-context";

export const Label = ({ children }) => {
    const id = React.useContext(FieldContext)

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-900" >
                { children }
            </label>          
        </div>
    )
}



Label.propTypes = {
    children: PropTypes.node  
}