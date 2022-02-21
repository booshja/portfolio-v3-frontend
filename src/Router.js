// dependencies
import React from "react";
// components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Socials } from "./components";

const Router = ({ nextTheme }) => {
  return (
    <BrowserRouter>
      <Header nextTheme={nextTheme} />
      <Socials />
      <Routes>
        <Route path="/" element="" />
        <Route path="/wp-admin" element="" />
        <Route path="*" element="" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
