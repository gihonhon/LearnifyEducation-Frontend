"use client";
import { signOut } from "next-auth/react";
import { BiChevronRight } from "react-icons/bi";

const LogOutBtn = () => {
  return (
    <div
      className="w-full flex items-center justify-between"
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/masuk`,
        })
      }
    >
      <p>Keluar</p>
      <BiChevronRight />
    </div>
  );
};

export default LogOutBtn;
