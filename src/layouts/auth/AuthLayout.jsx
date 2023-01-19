import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useIsLogin } from "../../hooks/authHook";
import Login from "../../pages/auth/Login";

const AuthLayout = () => {
  const [loading, isLogin] = useIsLogin();

  return (
    <div className="limiter">
      {loading ? (
        <div
          className="spinner-border text-primary waiting-center"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : !isLogin ? (
        <div className="container-login100">
          <Routes>
            <Route path="/auth/login" element={<Login />} />
          </Routes>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};

export default AuthLayout;
