import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import { Marketplace } from "pages/marketplace";
import { AuthProvider } from "domains/auth/auth.state"

ReactDOM.render(
    <AuthProvider>
        <Marketplace />
    </AuthProvider>, 
    document.getElementById("root")
)