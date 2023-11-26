import { MobileSidebar } from "./mobile-sidebar";
import NavbarRoutes from "./navbar-routes";

export const Navbar = () => {
  return (
    <div className="p-4 bg-white/90 border-b h-full flex items-center shadow-sm justify-between">
      <NavbarRoutes />
      <MobileSidebar />
    </div>
  );
};
