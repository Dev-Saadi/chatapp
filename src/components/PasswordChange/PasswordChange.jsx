import React from "react";
import { Link } from "react-router-dom";
import { useSendCodeMutation } from "../../features/apiRTKQuery/authApi";

const PasswordChange = ({
  user,
  setSuccess,
  success,
  setError,
  setLoading,
  error,
  setVisible,
}) => {
  const [sendCode] = useSendCodeMutation();

  let sendCodebtn = async () => {
    try {
      setLoading(false);
      let result = await sendCode(user.email).unwrap();
      setSuccess(result.message);
      setError("");

      setTimeout(() => {
        setVisible(2);
        setSuccess("");
      }, 2000);
    } catch (error) {
      setError(error.data.message);
    }
  };

  return (
    <div className="min-w-80 w-[600px] bg-white px-8 py-4 rounded-2xl">
      <h2 className="font-gilroyBold text-xl text-black border-b border-line_color">
        Reset Password
      </h2>
      <p className="font-gilroyMedium text-base text-text_color mt-2">
        How would you like to recieve the hidden code to reset your password?
      </p>
      <div className="mt-4 text-center">
        {/* profile picture div */}
        <div className="w-16 h-16 bg-secondary_bg rounded-full mx-auto overflow-hidden">
          <img
            src={user.profilePicture}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-3  mt-4 ">
        <input type="radio" defaultChecked={true} />
        <span className="font-gilroyRegular text-base text-text_color">
          {user.email}
        </span>
      </div>
      {success && (
        <p className="font-gilroyRegular text-base text-green text-center mt-3">
          {success}
        </p>
      )}
      {error && (
        <p className="font-gilroyRegular text-base text-red text-center mt-3">
          {error}
        </p>
      )}
      <div className="text-center space-x-3 mt-2 border-t border-line_color">
        <button
          onClick={sendCodebtn}
          className="bg-transDark p-3 md:px-5 md:py-2 mt-4 rounded-md font-gilroyMedium text-sm text-line_color"
        >
          Continue
        </button>

        <Link to="/login">
          <button className="bg-secondary_color p-3 md:px-5 md:py-2 mt-4 rounded-md font-gilroyMedium text-sm text-line_color">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PasswordChange;
