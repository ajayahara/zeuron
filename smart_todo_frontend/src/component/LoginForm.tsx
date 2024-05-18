import React, { useState } from "react";
import { Link } from "react-router-dom";

interface LoginData {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data=await res.json();
      console.warn(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center w-full h-[100vh]">
      <div className="flex justify-center shadow w-1/2 rounded-lg my-auto bg-gradient-to-bl from-violet-600 via-purple-600 to-violet-500">
        <div className="h-[90%] w-full mt-7">
          <div className="mb-6 text-white">
            <Link
              to="/signup"
              className="flex justify-end mr-8 space-x-2 hover:underline underline-offset-4"
            >
              <h1>Signup &rarr;</h1>
            </Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 justify-center items-center mt-7"
          >
            <div>
              <h1 className="text-base text-gray-200">Username</h1>
              <input
                type="text"
                name="username"
                placeholder="Enter username here"
                className="rounded-md px-2 py-2 bg-white text-gray-600 focus:outline-none md:w-72 lg:w-[340px]"
                value={loginData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <h1 className="text-base text-gray-200">Password</h1>
              <input
                name="password"
                type="password"
                placeholder="Enter password here"
                className="rounded-md px-2 py-2 bg-white text-gray-600 focus:outline-none md:w-72 lg:w-[340px]"
                value={loginData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center mt-4 w-full">
              <button
                type="submit"
                className="uppercase md:w-72 lg:w-[340px] py-2 rounded-md text-white bg-gradient-to-b from-violet-700 via-violet-600 to-violet-700 hover:brightness-105 font-medium"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center my-6">
            <Link
              to="/signup"
              className="text-sm font-medium text-gray-200 hover:text-white hover:underline underline-offset-4"
            >
              Don&apos;t have an account ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
