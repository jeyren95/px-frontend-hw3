import React from "react";
import { FieldContext } from "components/field-context";
import { useId } from "hooks/use-id"


export const Field = ({ children, id }) => {
    const ensuredId = useId(id)

    // anything wrapped inside the field context provider can use the context
    // in this case
        // we want the label and text input to use the context id
        // this label and text input is nested within text field
    return (
        <FieldContext.Provider value={ensuredId}>
            <div className="space-y-1">{children}</div>
        </FieldContext.Provider>
    )    
}