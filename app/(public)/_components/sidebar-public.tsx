import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-right font-sans italic">
          Learnify
        </h1>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
