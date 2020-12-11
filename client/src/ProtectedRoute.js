import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem("mtAuthenticated");
  return (
    <Route
      render={() => {
        if (isAuthenticated === "true") {
          return <Component />;
        } else {
          return <Redirect to="/not-authorised" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
