import React from "react";
import Header from "../Header";

type MainLayoutProps = { children: React.ReactNode };

const MainLayout = ({ children }: MainLayoutProps): React.ReactNode => {
  return (
    <div className="flex flex-col h-full w-full ">
      <Header />
      <main className="flex h-full justify-center">{children}</main>
    </div>
  );
};

export default MainLayout;
