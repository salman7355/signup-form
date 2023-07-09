"use client";
import { useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [UNBool, setUNBool] = useState(false);

  const handleName = (e) => {
    setUserName(e.target.value);
    userName.length < 3 || userName.length > 25
      ? setUNBool(false)
      : setUNBool(true);
  };

  const [email, setEmail] = useState("");
  const [EBool, setEBool] = useState(false);

  const valideteEmail = (email) => {
    return !email.includes("@") ? false : true;
  };

  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEBool(valideteEmail(emailValue));
  };

  const [password, setPassword] = useState("");
  const [PBool, setPBool] = useState(false);

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[^A-Za-z0-9]/.test(password);
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChars
    );
  };

  const handlePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setPBool(validatePassword(passwordValue));
  };

  const [confirmPassCode, setConfirmCode] = useState("");
  const [ConfirmPBool, setConfirmPBool] = useState(false);

  const validateConfirmPassword = (confirmPass) => {
    return confirmPass === password;
  };

  const handleConfirm = (e) => {
    const confrimPassword = e.target.value;
    setConfirmCode(confrimPassword);
    setConfirmPBool(validateConfirmPassword(confrimPassword));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 flex justify-center bg-slate-300 rounded-3xl h-[35rem] shadow-xl shadow-black ">
        <form className="flex text-black justify-center w-full  flex-col">
          <h1 className=" font-bold text-center mb-5 p-4 text-5xl">Sign Up</h1>
          <input
            onChange={handleName}
            type="text"
            className={
              !UNBool
                ? "m-3 p-2 rounded-xl focus:outline-none focus:border-2 focus:border-red-800  mb-4 "
                : "m-3 p-2 rounded-xl focus:outline-none focus:border-2 focus:border-green-800  mb-4 "
            }
            placeholder="Username"
          />
          {!UNBool && (
            <p className=" text-red-600 ml-4 mb-2 -mt-3 text-sm">
              Username must be between 3 and 25 charachters
            </p>
          )}

          <input
            type="email"
            onChange={handleEmail}
            className={
              !EBool
                ? "m-3 p-2 rounded-xl focus:outline-none focus:border-2 focus:border-red-800  mb-4 "
                : "m-3 p-2 rounded-xl focus:outline-none focus:border-2 focus:border-green-800  mb-4 "
            }
            placeholder="Email"
          />
          {!EBool && (
            <p className=" text-red-600 ml-4 mb-2 -mt-3 text-sm">
              Email must Contains @
            </p>
          )}

          <input
            type="password"
            onChange={handlePassword}
            className={
              !PBool
                ? "m-3 p-2 rounded-xl focus:outline-none focus:border-2 focus:border-red-800  mb-4 "
                : "m-3 p-2 rounded-xl focus:outline-none focus:border-2 focus:border-green-800  mb-4 "
            }
            placeholder="Password"
          />
          {!PBool && (
            <p className=" text-red-600 ml-4 mb-2 -mt-3 text-sm">
              Password must be at least 8 characters long, contain at least one
              uppercase letter, one lowercase letter, one number, and one
              special character.
            </p>
          )}

          <input
            type="password"
            onChange={handleConfirm}
            className={
              !ConfirmPBool
                ? "m-3 p-2 rounded-xl mb-6 focus:outline-none focus:border-2 focus:border-red-800 "
                : "m-3 p-2 rounded-xl  focus:outline-none focus:border-2 focus:border-green-800  mb-4  "
            }
            placeholder="Confirm Password"
          />
          {!ConfirmPBool && (
            <p className=" text-red-600 ml-4  -mt-5 text-sm">
              Please Enter The Password Again .
            </p>
          )}
          <button></button>
        </form>
      </div>
    </div>
  );
}
