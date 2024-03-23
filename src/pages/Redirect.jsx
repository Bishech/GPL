import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { setUserToken } from "../stores/user";

export const Redirect = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    setUserToken(token);
    navigate("/");
  }, []);

  return <div></div>;
};
