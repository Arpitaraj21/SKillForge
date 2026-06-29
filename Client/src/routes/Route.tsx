import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../components/Login";
import AuthLayout from "../components/Layout/AuthLayout";
import Signup from "../components/Signup";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../components/Layout/MainLayout";
import LandingPage from "../components/LandingPage";
import Dashboard from "../components/Dashboard";


export const router = createBrowserRouter([
    {
        path: "/", 
        element: <LandingPage />
    },
    {
        element: <AuthLayout/>,
        children: [
            {path: "login", element: <Login/>},
            {path: "signup", element: <Signup/>}
        ]
    },
    {
        element: (
            <ProtectedRoute>
                <MainLayout/>
            </ProtectedRoute>
        ),
        children: [
            {path: '/dashboard',
                element: <Dashboard/>
            }
        ]
    }
])