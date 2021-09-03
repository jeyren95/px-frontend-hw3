import React from "react";

// creating this use-id custom hook
// purpose
    // can be used across all the label-input, label-textarea components
    // this is especially good if we have multiple forms/multple pairs of label-input components
    // don't have to keep manually associating the label to the respective input/textarea

// note that custom hooks usually return a value, as opposed to normal hooks



// create an abstract number id
let currentId = 0

export const useId = (providedId) => {
    // set the state of id to either
        // the provided id or
        // using current id
    const [id] = React.useState(providedId || String(currentId++))

    return id
}