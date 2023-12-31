import { MobileSidebar } from "./mobile-sidebar-dashboard";
import NavbarRoutes from "./navbar-routes-dashboard";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
