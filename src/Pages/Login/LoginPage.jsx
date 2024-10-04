import React from "react";
import LeftAuth from "../../components/authentication/LeftAuth";
import { RegistrationIcon } from "../../svg/RegistrationIcon";
import Regis2 from "../../svg/Regis2";
import RegistrationForm from "../../components/authentication/RegistrationForm";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import LoginForm from "../../components/authentication/LoginForm";
import LoginImg from "../../svg/LoginImg";

const LoginPage = () => {
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="relative">
        <div className="hidden lg:block w-[630px] z-[-1] h-[630px] bg-gradient-to-br from-blueTeal to-page_color rounded-[50%] absolute -top-[150px] -left-[150px]"></div>

        <div className="lg:flex container gap-x-6 justify-center items-center h-screen">
          <div className=" lg:w-[45%] xl:w-[45%]">
            <LeftAuth
              icon={<LoginImg />}
              title="Unlock your world."
              description="Stay connected, every login. Your world, at your fingertips. Rediscover friendships. Connect and share. Instant access to your community. Seamlessly dive into your digital realm. Where relationships thrive, log in today. Your social journey continues here."
            />
          </div>

          <div className="w-full lg:w-[45%] xl:w-[35%]">
            <LoginForm toast={toast} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
