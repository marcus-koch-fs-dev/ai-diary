import React from "react";
import { NavLink } from "react-router";

type RegisterPageProps = {};

function RegisterPage({}: RegisterPageProps): React.ReactNode {
  return (
    <>
      <div>RegisterPage</div>
      <NavLink to="/">LandingPage</NavLink>
    </>
  );
}

export default RegisterPage;
