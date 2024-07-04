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
    
    // form submit function 
    const handleSubmit = async (e: React.FormEvent) => {
        
    }
    

    return (
        <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-semibold">{formTitle}</h1>
                {/* register form  */}
                {mode === MODE.REGISTER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="masud"
                            className="ring-2 ring-gray-300 rounded-md p-4"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                ) : null}
                {/* not email verification */}
                {mode !== MODE.EMAIL_VERIFICATION ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            className="ring-2 ring-gray-300 rounded-md p-4"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                ) : (
                        // email verification 
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Verification Code</label>
                        <input
                            type="text"
                            name="emailCode"
                            placeholder="Code"
                            className="ring-2 ring-gray-300 rounded-md p-4"
                            onChange={(e) => setEmailCode(e.target.value)}
                        />
                    </div>
                )}
                {/* login and register password filed  */}
                {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="ring-2 ring-gray-300 rounded-md p-4"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                ) : null}
                {/* forgot password  */}
                {mode === MODE.LOGIN && (
                    <div
                        className="text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.RESET_PASSWORD)}
                    >
                        Forgot Password?
                    </div>
                )}
                {/* button  */}
                <button
                    className="bg-masud text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : buttonTitle}
                </button>
                {/* error massage  */}
                {error && <div className="text-red-600">{error}</div>}
                {/* login  */}
                {mode === MODE.LOGIN && (
                    <div
                        className="text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.REGISTER)}
                    >
                        {"Don't"} have an account?
                    </div>
                )}
                {/* register  */}
                {mode === MODE.REGISTER && (
                    <div
                        className="text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.LOGIN)}
                    >
                        Have and account?
                    </div>
                )}
                {/* reset password  */}
                {mode === MODE.RESET_PASSWORD && (
                    <div
                        className="text-sm underline cursor-pointer"
                        onClick={() => setMode(MODE.LOGIN)}
                    >
                        Go back to Login
                    </div>
                )}
                {/* massage  */}
                {message && <div className="text-green-600 text-sm">{message}</div>}
            </form>
        </div>
    );
};

export default LoginPage;