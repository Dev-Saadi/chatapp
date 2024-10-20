import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import FindAccount from "../../components/PasswordChange/FindAccount";
import PasswordChange from "../../components/PasswordChange/PasswordChange";
import SecretCode from "../../components/PasswordChange/SecretCode";
import ChangingPassword from "../../components/PasswordChange/ChangingPassword";

const ResetPassword = () => {
  const [visible, setVisible] = useState(3);

  const renderComponent = () => {
    switch (visible) {
      case 0:
        return <FindAccount />;
      case 1:
        return <PasswordChange />;
      case 2:
        return <SecretCode />;
      case 3:
        return <ChangingPassword />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Forget Password</title>
      </Helmet>

      <div className="h-screen bg-gradient-to-tr from-blueTeal to-white via-line_color flex items-center justify-center">
        {renderComponent()}
      </div>
    </>
  );
};

export default ResetPassword;
