import React from "react";
import AdminContextContainer from "../../context/adminLayoutContext";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";
import Content from "../../pages/Content";
import { Navigate } from "react-router-dom";
import { useIsLogin } from "../../hooks/authHook";

const Index = () => {
  const [loading, isLogin] = useIsLogin();

  return (
    <AdminContextContainer>
      {loading ? (
        <div
          className="spinner-border text-primary waiting-center"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : isLogin ? (
        <div>
          <Content />
          <Navbar />
          <Sidebar />
        </div>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </AdminContextContainer>
  );
};

export default Index;
