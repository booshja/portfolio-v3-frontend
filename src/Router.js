// dependencies
import React from "react";
// components
import { BrowserRouter, Routes, Route } from "react-router-dom";
// layouts
import { PublicLayout } from "./pages/public/styles/layouts";
import AdminLayout from "./pages/admin/styles/layouts";
// pages
import {
  About,
  Cart,
  Contact,
  Dashboard,
  Experience,
  Is,
  Login,
  Messages,
  NotFound,
  Orders,
  Projects,
  Store,
} from "./pages";

const Router = ({ nextTheme }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicLayout nextTheme={nextTheme} />}>
        <Route index element={<Is />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="store" element={<Store />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="messages" element={<Messages />} />
        <Route path="projects" element={<Projects />} />
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="/wp-admin" element={<NotFound wordPress />} />
      <Route path="*" element={<NotFound nextTheme={nextTheme} />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
