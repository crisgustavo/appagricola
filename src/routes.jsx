import React from "react"
import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom"
import { AuthProvider, useAuth } from "./scripts/authContext"
import AgricolaLogin from "./pages/login"
import AgricolaLanding from "./pages/home"

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <AgricolaLogin />;
}

const router = createBrowserRouter ([
    {
        path: '/',
        element: <AgricolaLogin />
    },
    {
        path: '/agricola',
        element:(<ProtectedRoute>
                    <AgricolaLanding />
                </ProtectedRoute>)
    }
])

export default router