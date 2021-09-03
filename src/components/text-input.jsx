import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { FieldContext } from "components/field-context";

export const TextInput = ({  focusColor="pink", ...props }) => {
    const id = React.useContext(FieldContext)

    return (
        <div className="mt-1">
            <input 
            {...props}
            id={id}
            className={cn("block w-full shadow-sm sm:text-sm border-gray-300 rounded-md", classByColor[focusColor])} 
            />
        </div>
    )
}


// Different focus colors possible based on class
const classByColor = {
    pink: "focus:ring-pink-500 focus:border-pink-500",
    blue: "focus:ring-blue-500 focus:border-blue-500",
    yellow: "focus:ring-yellow-500 focus:border-yellow-500"
}


TextInput.propTypes = {
    onChange: PropTypes.func,
    focusColor: PropTypes.oneOf(["pink", "blue", "yellow"])
}