import React from "react";
import LeftAuth from "../../components/authentication/LeftAuth";
import { RegistrationIcon } from "../../svg/RegistrationIcon";
import Regis2 from "../../svg/Regis2";
import RegistrationForm from "../../components/authentication/RegistrationForm";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <div className="relative">
        <div className="hidden lg:block w-[630px] z-[-1] h-[630px] bg-gradient-to-br from-blueTeal to-page_color rounded-[50%] absolute -top-[150px] -left-[150px]"></div>

        <div className="lg:flex container gap-x-6 justify-center items-center h-screen">
          <div className=" lg:w-[45%] xl:w-[45%]">
            <LeftAuth
              icon={<Regis2 />}
              title=" Lets Explore Together!"
              description="Connect with like-minded souls. Sign up and discover a world of community. Your story begins here. Unlock a universe of possibilities. Register now and be part of something extraordinary. Empower your social experience."
            />
          </div>

          <div className="w-full lg:w-[45%] xl:w-[35%]">
            <RegistrationForm toast={toast} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
