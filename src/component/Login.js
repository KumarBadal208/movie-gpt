import Header from "./Header";

const Login = ()=>{
    return (
        <div className="h-[650px] opacity-95 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg')]">
            <Header/>
            <div className="flex justify-center items-center">
                <form className="opacity-85 p-4 flex flex-col items-center bg-gray-950 text-white w-1/3 h-96">
                    <h1 className="font-bold text-2xl">Sign In</h1>
                    <input className="bg-gray-600 w-3/4 my-2 p-2 h-10 rounded-lg" placeholder="Enter Email"></input>
                    <input className="bg-gray-600 w-3/4 my-2 p-2 h-10 rounded-lg" placeholder="Enter Password"></input>
                    <div className="w-3/4 my-2">
                        <button className="bg-red-800 w-full h-10 rounded-lg">Sign In</button>
                    </div>
                    <div>
                        New To Netflix? Sign Up Now
                    </div>
                </form>
            </div>
            
        </div>
    )
};

// background-color: rgb(0,0,0)

export default Login;