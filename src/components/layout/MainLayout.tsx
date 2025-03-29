import React from "react";
import Header from "../Header";
import { Outlet } from "react-router";

type MainLayoutProps = {};

const MainLayout = ({}: MainLayoutProps): React.ReactNode => {
  return (
    <div className="flex flex-col h-full w-full ">
      <Header />
      <main className="flex h-full justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
