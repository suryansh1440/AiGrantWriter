import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import GrantDisplayPage from "../pages/GrantDisplayPage";

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  // TODO: Implement proper authentication check
  const isAuthenticated = false; // This should be replaced with actual auth check

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Layout wrapper for protected routes
const ProtectedLayout = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "pricing",
                element: <Pricing />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "grant-display/:id",
                element: <GrantDisplayPage />,
            },
            // Protected routes
            {
                path: "dashboard",
                element: <ProtectedLayout />,
                children: [
                    {
                        index: true,
                        element: <div>Dashboard (Coming Soon)</div>,
                    },
                    {
                        path: "proposals",
                        element: <div>My Proposals (Coming Soon)</div>,
                    },
                    {
                        path: "templates",
                        element: <div>Templates (Coming Soon)</div>,
                    },
                ],
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <div>Profile (Coming Soon)</div>
                    </ProtectedRoute>
                ),
            },
            {
                path: "settings",
                element: (
                    <ProtectedRoute>
                        <div>Settings (Coming Soon)</div>
                    </ProtectedRoute>
                ),
            },
            // Catch all route
            {
                path: "*",
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);

export default router;