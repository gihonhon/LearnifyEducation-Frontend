import React from "react";
import LoginForm from "./loginForm";
import Slider from "../_components/slider";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

const Masuk = async () => {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="flex lg:h-screen w-full">
      <div className="w-full bg-opacity-50  lg:flex flex justify-center items-center">
        <LoginForm />
      </div>
      <Slider />
    </div>
  );
};

export default Masuk;
