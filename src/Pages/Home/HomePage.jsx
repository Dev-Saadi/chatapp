import React from "react";
import { Helmet } from "react-helmet-async";

import LoginPage from "../Login/LoginPage";

import PostHome from "../../components/HomeComponents/Middle/PostHome";
import ReAuth from "../../components/reAuth/ReAuth";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.registration);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {userInfo.verification === false && <ReAuth userInfo={userInfo} />}

      <PostHome />
    </>
  );
};

export default HomePage;
