import NavbarLogin from "@/components/Navbar/NavbarLogin";
import React from "react";

export const metadata = {
  title: "Masuk Akun",
};

const MasukLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarLogin />
      {children}
    </div>
  );
};

export default MasukLayout;
