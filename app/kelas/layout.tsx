import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "Learnify-Kelas",
};

const KelasLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default KelasLayout;
