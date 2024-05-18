import { Route, Routes } from "react-router-dom";
import React from "react";
import { LoginForm } from "../component/LoginForm";
import { SignupForm } from "../component/SignupForm";
import { Dashboard } from "../pages/Dashboard";
import { NonPrivateRoute, PrivateRoute } from "./PrivateRoute";
export const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <NonPrivateRoute>
            <LoginForm />
          </NonPrivateRoute>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <NonPrivateRoute>
            <SignupForm />
          </NonPrivateRoute>
        }
      ></Route>
    </Routes>
  );
};
