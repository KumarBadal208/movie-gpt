import { useRef, useState } from "react";
import Header from "./Header";

const Login = ()=>{

    const [loggedIn, setLoggedIn] = useState(true);
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const handleLoggIn = ()=>{
        setLoggedIn(!loggedIn);
    }

    const onFormSubmit = ()=>{
        console.log(email.current.value);
        console.log(password.current.value);
    }

    return (
        <div className="h-[800px] opacity-95 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg')]">
            <Header/>
            <div className="flex justify-center my-16 items-center">
                <form onSubmit={(e)=>{e.preventDefault()}} className="opacity-85 px-4 py-8 flex flex-col items-center bg-gray-950 text-white w-1/3 h-[450px]">
                    <h1 className="font-bold text-2xl">{loggedIn ? "Sign In" : "Sign Up"}</h1>
                    <input ref={email} className="bg-gray-600 w-3/4 my-2 p-2 h-10 rounded-lg" placeholder="Enter Email"></input>
                    <input ref={password} className="bg-gray-600 w-3/4 my-2 p-2 h-10 rounded-lg" placeholder="Enter Password"></input>
                    <div className="w-3/4 my-4">
                        <button onClick={onFormSubmit} className="bg-red-800 w-full h-10 rounded-lg">{loggedIn ? "Sign In" : "Sign Up"}</button>
                    </div>
                    <div>
                        {loggedIn && "New To Netflix?"} <a onClick={handleLoggIn} className="font-bold cursor-pointer">{loggedIn ? "Sign Up Now" : "Sign In Now"}</a>
                    </div>
                </form>
            </div>
            
        </div>
    )
};

// background-color: rgb(0,0,0)

export default Login;