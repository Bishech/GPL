import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Redirect = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    localStorage.setItem("authToken", token);
    navigate("/");
  }, []);

  return <div></div>;
};
