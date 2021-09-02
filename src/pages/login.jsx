import React from "react";
import { Label } from "components/label";
import { TextInput } from "components/text-input";

export const Login = () => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")


    return (
        <main className="bg-gray-50 p-6 sm:p-12 min-h-screen">
            <div className="max-w-md mx-auto px-4 sm:px-6 py-6 bg-white shadow">
                <form>
                    <div className="text-3xl mt-4 mb-8 font-extrabold text-center">Login</div>
                    <div className="space-y-6">
                        <div>
                            <Label id="username">Email</Label>
                            <TextInput 
                            name="username" 
                            id="username" 
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            />
                        </div>
                        <div>
                            <Label id="password">Password</Label>
                            <TextInput
                            name="password"
                            id="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )

}