// useReducer to handle complex state logic such as authentication
// useReducer takes in 2 args and returns [current state, dispatch method]
    // reducer function 
        // take in 2 args
            // current state
            // action to conduct on the current state
    // initial state
import React from "react";


// define locally stored access token key
const STORED_TOKEN_KEY = "storedAccessToken"

// initial state of authentication 
    // if there is stored access token
        // set status as authenticated 
    // if not
        // set status as anonymous
const INITIAL_AUTH_STATE = localStorage.getItem(STORED_TOKEN_KEY) ? 
    {
        authStatus: "authenticated",
        accessToken: localStorage.getItem(STORED_TOKEN_KEY)
    }
    :
    {
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
const useAuthState = () => {
    const [state, dispatch] = React.useReducer(authReducer, INITIAL_AUTH_STATE)

    // dispatch the different action types that can be done
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

// create a context for the auth state that can be used by all components 
export const AuthContext = React.createContext()
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
    const authState = useAuthState()
    return (
        <AuthContext.Provider value={authState}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const auth = React.useContext(AuthContext)

    if (!auth) {
        throw new Error("Your application must be wrapped with Auth Provider")
    } else {
        return auth
    }
}


// i would also want to put the fetch login api logic here
// this increases resuability 
    // e.g. what if i would also like another page to have a login form
    // i don't have to keep typing out the fetch api logic

// Attempt login
const attemptLogin = (loginDetails) => 
    fetch("https://ecomm-service.herokuapp.com/login", {        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginDetails)
    })
    .then((res) => {
        if (res.ok) {
            return res.json()
        }
        throw new Error(res.statusText)
    })



// this is to return the mechanism on submission of the login form
export const useLogin = () => {
    const auth = React.useContext(AuthContext)

    if (!auth) {
        throw new Error("Your application must be wrapped with Auth Provider")
    } else {
        return (loginDetails) => 
            attemptLogin(loginDetails)
            .then((data) => {
                auth.login(data.access_token)
                localStorage.setItem(STORED_TOKEN_KEY, data.access_token)
            })
            .catch((err) => console.log(err)) 
    }
}


export const useLogout = () => {
    const auth = React.useContext(AuthContext)

    if (!auth) {
        throw new Error("Your application must be wrapped with Auth Provider")
    } else {
        return () => auth.logout()
    }
    
}




