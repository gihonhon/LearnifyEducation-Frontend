import { getServerSession } from "next-auth";
import Slider from "../_components/slider";
import DaftarForm from "./daftarForm";
import { redirect } from "next/navigation";

const Daftar = async () => {
  const session = await getServerSession();
  if (session?.user) {
    return redirect("/");
  }
  return (
    <div className="flex lg:h-screen w-full">
      <div className="w-full  bg-opacity-50 lg:flex flex justify-center items-center">
        <DaftarForm />
      </div>
      <Slider />
    </div>
  );
};

export default Daftar;
