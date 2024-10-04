import React from "react";
import { Outlet } from "react-router-dom";
import LoginPage from "../Pages/Login/LoginPage";
import { useSelector } from "react-redux";

const SignedInUser = () => {
  const { userInfo } = useSelector((state) => state.registration);
  return userInfo ? <Outlet /> : <LoginPage />;
};

export default SignedInUser;
