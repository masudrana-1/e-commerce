"use client"

import { useState } from "react";


enum MODE {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    RESET_PASSWORD = "RESET_PASSWORD",
    EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
};


const LoginPage = () => {


    // all states
    const [mode, setMode] = useState(MODE.LOGIN);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailCode, setEmailCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");


    // From title 
    const formTitle =
        mode === MODE.LOGIN
        ? "Log in"
        : mode === MODE.REGISTER
        ? "Register"
        : mode === MODE.RESET_PASSWORD
        ? "Reset Your Password"
        : "Verify Your Email";
    
    
    // button title 
    const buttonTitle =
        mode === MODE.LOGIN
        ? "Login"
        : mode === MODE.REGISTER
        ? "Register"
        : mode === MODE.RESET_PASSWORD
        ? "Reset"
        : "Verify";

    return (
        <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
            <form className="flex flex-col gap-8">

            </form>
        </div>
    );
};

export default LoginPage;