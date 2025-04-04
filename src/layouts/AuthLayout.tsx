import React from "react";
import Header from "../components/organisms/Header/Header";
import { Outlet } from "react-router";

type AuthLayoutProps = {};

const AuthLayout = ({}: AuthLayoutProps): React.ReactNode => {
  return (
    <div className="flex flex-col h-full w-full ">
      <Header />
      <main className="flex h-full justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
