import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { AuthProvider } from "./providers/Auth";

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>, 
    document.querySelector(".root"));