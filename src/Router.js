// dependencies
import React from "react";
// components
import { BrowserRouter, Routes, Route } from "react-router-dom";
// layouts
import {
  CartLayout,
  PublicLayout,
  StoreLayout,
} from "./pages/public/styles/layouts";
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
  Message,
  Messages,
  NotFound,
  Order,
  Orders,
  Project,
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
        <Route path="store" element={<StoreLayout />}>
          <Route index element={<Store />} />
        </Route>
        <Route path="cart" element={<CartLayout />}>
          <Route index element={<Cart />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="messages" element={<Messages />} />
        <Route path="messages/:id" element={<Message />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<Project />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<Order />} />
      </Route>
      <Route path="/wp-admin" element={<NotFound wordPress />} />
      <Route path="*" element={<NotFound nextTheme={nextTheme} />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
