import React from "react";
import Header from "../components/organisms/Header/Header";
import { Navigate, Outlet } from "react-router";
import { useAuth, useIsAdmin } from "@/context/auth.context";

type AppLayoutProps = {};

const AppLayout = ({}: AppLayoutProps): React.ReactNode => {
  const { isAuthenticated, user } = useAuth();
  const isAdmin = useIsAdmin();

  if (!user || !isAuthenticated) return <Navigate to="/" replace />;

  return (
    <div className="flex flex-col h-full w-full ">
      <Header />
      <aside className="flex flex-col gap-4 p-4 bg-gray-100">
        {/* {isAdmin ? <AdminSidebar /> : <UserSidebar />} */}
      </aside>
      <main className="flex h-full justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
