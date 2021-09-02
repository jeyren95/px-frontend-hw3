import React from "react";
import PropTypes from "prop-types";

export const TextInput = ({ ...props}) => {

    return (
        <div className="mt-1">
            <input 
            {...props}
            className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md" 
            />
        </div>
    )
}


// Prop types
    // id => string/number, required
    // name for form submission => string/number, required

TextInput.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
}