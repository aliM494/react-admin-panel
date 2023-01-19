import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken"));

    axios
      .get("http://ecomadminapi.azhadev.ir/api/auth/logout", {
        headers: {
          Authorization: `Bearer ${loginToken.token}`,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          localStorage.removeItem("loginToken");
          setLoading(false);
        }
      });
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
