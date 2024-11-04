import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import FindAccount from "../../components/PasswordChange/FindAccount";
import PasswordChange from "../../components/PasswordChange/PasswordChange";
import SecretCode from "../../components/PasswordChange/SecretCode";
import ChangingPassword from "../../components/PasswordChange/ChangingPassword";

const ResetPassword = () => {
  const [visible, setVisible] = useState(0);
  const [user, setUser] = useState();
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const renderComponent = () => {
    switch (visible) {
      case 0:
        return (
          <FindAccount
            setLoading={setLoading}
            setError={setError}
            setUser={setUser}
            error={error}
            setVisible={setVisible}
          />
        );
      case 1:
        if (user) {
          return (
            <PasswordChange
              user={user}
              setSuccess={setSuccess}
              success={success}
              setLoading={setLoading}
              setError={setError}
              setVisible={setVisible}
              error={error}
            />
          );
        }
        setVisible(0);
        return null;
      case 2:
        if (user) {
          return (
            <SecretCode
              user={user}
              setSuccess={setSuccess}
              success={success}
              setLoading={setLoading}
              setError={setError}
              setVisible={setVisible}
              error={error}
            />
          );
        }
        setVisible(0);
        return null;
      case 3:
        if (user) {
          return (
            <ChangingPassword
              user={user}
              setSuccess={setSuccess}
              success={success}
              setLoading={setLoading}
              setError={setError}
              error={error}
            />
          );
        }
        setVisible(0);
        return null;
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
