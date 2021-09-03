// useReducer to handle complex state logic such as authentication
// useReducer takes in 2 args and returns [current state, dispatch method]
    // reducer function 
        // take in 2 args
            // current state
            // action to conduct on the current state
    // initial state

import React from "react";

// initial state of authentication 
const INITIAL_AUTH_STATE = {
    authStatus: "anonymous",
    accessToken: null
}

const authReducer = (state, action) => {
    switch(action.type) {
        // when user logs in, change the state to "authenticated" and access token
        case "login":
            return {
                authStatus: "authenticated",
                accessToken: action.accessToken
            }

        case "logout":
            return {
                authStatus: "anonymous",
                accessToken: null
            }
        
        default:
            throw new Error(`Unsupported action type ${action.type} in authReducer`)
    }
}



// i would prefer this useAuth state to be shared with every component
// so that each component knows the login state of the app
    // don't have to keep logging in
    // in this case
        // the context provider has to be right at the top
        // to share this state with deeply nested components
export const useAuthState = () => {
    const [state, dispatch] = React.useReducer(authReducer, INITIAL_AUTH_STATE)

    // dispatch an action to be done
    const login = (accessToken) => {
        dispatch({ type: "login", accessToken })
    }

    const logout = () => {
        dispatch({ type: "logout" })
    }


    return {
        ...state,
        login, 
        logout  
    }
}


export const AuthContext = React.createContext()
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
    const auth = useAuthState()

    return (
        <AuthContext.Provider value={auth}>
            { children }
        </AuthContext.Provider>

    )
}









