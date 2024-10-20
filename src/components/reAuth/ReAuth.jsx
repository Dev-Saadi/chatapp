import React, { useState } from "react";
import { useReVerificationMutation } from "../../features/apiRTKQuery/authApi";

const ReAuth = ({ userInfo }) => {
  const [reVerification] = useReVerificationMutation();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const resendCode = async () => {
    try {
      let result = await reVerification(userInfo.token).unwrap();
      setSuccess(result.message);
    } catch (error) {
      setError(error.data.message);
    }
  };
  return (
    <>
      <div className="w-fullbg-white shadow-md mt-5 rounded-2xl p-4">
        <h4 className="text-black font-gilroyRegular text-base">
          "Your account is unverified and will be deleted within an hour of
          registration. Please verify to remain active."
        </h4>
        <button
          onClick={resendCode}
          className="font-gilroyRegular text-blue text-base cursor-pointer hover:underline"
        >
          Resend Verification Link
        </button>

        {success && (
          <p className="font-gilroyRegular text-base text-green">{success}</p>
        )}

        {error && (
          <p className="font-gilroyRegular text-base text-red">{error}</p>
        )}
      </div>
    </>
  );
};

export default ReAuth;
