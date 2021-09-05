import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

export const Button = ({ color="pink", children, ...props }) => {
    return (
        <button 
        {...props} 
        className={cn("inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500",  
            props.className
        )}
        >
            {children}
        </button>
    )
}


Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
}