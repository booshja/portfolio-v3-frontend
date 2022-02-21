// dependencies
import React from "react";
// pages
import { Is } from "./pages";
// components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Copyright, Header, Socials } from "./components";

const Router = ({ nextTheme }) => {
  return (
    <BrowserRouter>
      <Header nextTheme={nextTheme} />
      <Socials />
      <Copyright />
      <Routes>
        <Route path="/" element={<Is />} />
        <Route path="/wp-admin" element="" />
        <Route path="*" element="" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
