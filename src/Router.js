// dependencies
import React from "react";
// pages
import {
  About,
  Cart,
  // Checkout,
  Contact,
  // Dashboard,
  Experience,
  // GeneralError,
  Is,
  // Login,
  // Messages,
  // Order,
  // Orders,
  // Project,
  // Projects,
  Store,
} from "./pages";
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
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/cart" element={<Cart />} />
        {/* <Route path="/store/checkout" element={<Checkout />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/admin" element={<Dashboard />} /> */}
        {/* <Route path="/admin/messages" element={<Messages />} /> */}
        {/* <Route path="/admin/projects" element={<Projects />} /> */}
        {/* <Route path="/admin/projects/:id" element={<Project />} /> */}
        {/* <Route path="/admin/orders" element={<Orders />} /> */}
        {/* <Route path="/admin/orders/:id" element={<Order />} /> */}
        {/* <Route path="/wp-admin" element={<GeneralError wordpress />} /> */}
        {/* <Route path="*" element={<GeneralError />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
