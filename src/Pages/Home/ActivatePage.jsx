import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import LoginPage from "../Login/LoginPage";

import PostHome from "../../components/HomeComponents/Middle/PostHome";
import Activation from "./Activation";
import { json, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useVerifiedUserMutation } from "../../features/apiRTKQuery/authApi";
import { userLoggedIn } from "../../features/users/authSlice";

const ActivatePage = () => {
  const [verifiedUser] = useVerifiedUserMutation();
  const [loading, setloading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { userInfo } = useSelector((state) => state.registration);
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(userInfo.token);
  // console.log(token);

  useEffect(() => {
    activateUser();
  }, []);

  const activateUser = async () => {
    try {
      setloading(true);
      const result = await verifiedUser({
        token,
        userToken: userInfo.token,
      }).unwrap();
      setSuccess(result.message);
      setError("");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userInfo, verification: true }),
        dispatch(userLoggedIn({ ...userInfo, verification: true }))
      );
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setError(error.data.message);
      setloading(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {success && (
        <Activation
          type="success"
          head="Account Successfully Activated"
          text={success}
          loading={loading}
        />
      )}

      {error && (
        <Activation
          type="error"
          head="Verification Required"
          text={error}
          loading={loading}
        />
      )}

      <PostHome />
    </>
  );
};

export default ActivatePage;
