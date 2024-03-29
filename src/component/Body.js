import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = ()=>{
    const route = createBrowserRouter([
        {
          path : "/",
          element: <Login/>
        },
        {
          path : "/browse",
          element : <Browse/>
        }
    ]);

    return (
        <RouterProvider router={route}/>
    )
};

export default Body;