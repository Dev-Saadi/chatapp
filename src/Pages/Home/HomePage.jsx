import React from "react";
import { Helmet } from "react-helmet-async";

import LoginPage from "../Login/LoginPage";

import PostHome from "../../components/HomeComponents/Middle/PostHome";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <PostHome />
    </>
  );
};

export default HomePage;
