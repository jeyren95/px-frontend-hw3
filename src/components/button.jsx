import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

export const Button = ({ color="pink", children, ...props }) => {
    return (
        <button 
        {...props} 
        className={cn("inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2",
            classByColor[color],
            props.className
        )}
        >
            {children}
        </button>
    )
}

const classByColor = {
    pink: "bg-pink-600 hover:bg-pink-700 focus:ring-pink-500",
    blue: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
    yellow: "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500"
}


Button.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(["pink", "blue", "yellow"])
}