import PropTypes from "prop-types"

export const Label = ({ children, id }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-900" >
                { children }
            </label>            
        </div>
    )
}


// Prop types
    // id to associate label with input => string or number, required
    // children can be anything => node, required
Label.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    children: PropTypes.node.isRequired    
}