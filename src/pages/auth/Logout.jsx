import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { logoutService } from "../../services/auth";
import { Alert } from "../../utils/alerts";

const Logout = () => {
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    try {
      const res = await logoutService();
      if (res.status == 200) {
        localStorage.removeItem("loginToken");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="spinner-border text-primary waiting-center"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </>
  );
};

export default Logout;
