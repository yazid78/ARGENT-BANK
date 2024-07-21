import { createBrowserRouter } from "react-router-dom";
import App from "./component/App";
import Login from "./component/Login";
import User from "./component/User";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/sign-in',
        element: <Login />
    },
    {
        path: '/user',
        element: <User />
    }
])
