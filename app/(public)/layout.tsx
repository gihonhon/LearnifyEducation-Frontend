import Footer from "@/components/footer";
import { Navbar } from "./_components/navbar-public";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] fixed inset-y-0 w-full">
        <Navbar />
      </div>
      <main className="pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default PublicLayout;
