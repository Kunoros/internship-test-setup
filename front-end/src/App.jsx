import react, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import { useMsal, useMsalAuthentication } from '@azure/msal-react';
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
  useMsalAuthentication,
} from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Test from "./pages/test.jsx";

const Pages = () => {
  useMsalAuthentication(InteractionType.Redirect);

  return (
    <div>
      <AuthenticatedTemplate>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <h5>Please sign-in to see your profile information.</h5>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default function App(msalInstance) {
  // console.log(msalInstance.instance);
  return (
    <MsalProvider instance={msalInstance.instance}>
      <Pages />
    </MsalProvider>
  );
}
