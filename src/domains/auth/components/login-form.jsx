import React from "react";
import { TextField } from "components/text-field";
import { Button } from "components/button";
import { useLogin } from "domains/auth/auth.state"


export const LoginForm = () => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const login = useLogin()
    const usernameRef = React.useRef()

    // on load of login form, focus to the username input
    React.useEffect(() => {
        usernameRef.current.focus()
    }, [])
    

    return (  
        <form 
        onSubmit={(e) => {
            e.preventDefault();
            login({username, password})
        }}
        >
            <div className="text-3xl mt-4 mb-8 font-extrabold text-center">Login</div>
            <div className="space-y-6">
                <TextField 
                id="username"
                name="username"
                label="Username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                ref={usernameRef}
                />
                <TextField 
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                type="submit"
                className="w-full"
                >
                    LOGIN
                </Button>
            </div>
        </form>  
                       
           
    )
}