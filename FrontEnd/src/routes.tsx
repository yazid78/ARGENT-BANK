import { createBrowserRouter } from "react-router-dom";
import App from "./component/App";
import SignUp from "./component/SignUp";
import User from "./component/User";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/sign-in',
        element: <SignUp />
    },
    {
        path: '/user',
        element: <User />
    }
])
