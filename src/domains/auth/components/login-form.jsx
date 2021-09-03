import React from "react";
import { TextField } from "components/text-field";
import { Button } from "components/button";


export const LoginForm = ({ handleSubmit, setUsername, setPassword}) => {

    return (  
        <form onSubmit={handleSubmit}>
            <div className="text-3xl mt-4 mb-8 font-extrabold text-center">Login</div>
            <div className="space-y-6">
                <TextField 
                id="username"
                name="username"
                label="Username"
                type="text"
                onChange={setUsername}
                />
                <TextField 
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={setPassword}
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