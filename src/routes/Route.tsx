import React from "react";
import { Route, Redirect } from "react-router-dom";

import DefaultLayout from "~/layouts/default";
import AuthLayout from "~/layouts/auth";

import { Theme } from "~/theme";

import { store } from "~/store";

import { GlobalStyle } from "~/styles/global";

function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}: any) {
  const state: any = store.getState();
  const signed: any = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          <Layout>
            <GlobalStyle />
            <Component {...props} />
          </Layout>
        )}
      />
    </>
  );
}

export default Theme(RouteWrapper);
