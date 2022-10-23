import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Hotels from "../components/Hotels";
import Login from "../components/Login";
import Register from "../components/Register";
import Search from "../components/Search";
import VerifyEmail from "../components/VerifyEmail";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div><h1>Error Khaicos. Ja ga!</h1></div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>{
                    return fetch('https://hotels-data-server.vercel.app/hotels')
                }
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: ()=>{
                    return fetch('https://hotels-data-server.vercel.app/hotels')
                }
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/search',
                element: <Search></Search>
            },
            {
                path: '/verify',
                element: <VerifyEmail></VerifyEmail>
            },
            {
                path: '/hotels',
                element:<PrivateRoute><Hotels></Hotels></PrivateRoute>,
                loader: ()=>{
                    return fetch('https://hotels-data-server.vercel.app/hotels')
                }
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
])