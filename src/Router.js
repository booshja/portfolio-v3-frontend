// dependencies
import React from "react";
// components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router";
// layouts
import { PublicLayout } from "./pages/public/styles/layouts";
// import { AdminLayout, MessagesLayout } from "./pages/admin/styles/layouts";
// pages
import {
  About,
  //   Cart,
  Contact,
  Dashboard,
  Experience,
  Is,
  Login,
  //   Message,
  //   Messages,
  //   NotFound,
  //   Orders,
  //   Projects,
  //   Store,
} from "./pages";

const StoreLayout = () => (
  <div>
    <p>This is the store layout</p>
    <Outlet />
  </div>
);

const MessagesLayout = () => (
  <div>
    <p>This is the messages layout</p>
    <Outlet />
  </div>
);

const ProjectsLayout = () => (
  <div>
    <p>This is the projects layout</p>
    <Outlet />
  </div>
);

const ProjectLayout = () => (
  <div>
    <p>This is the individual project layout</p>
    <Outlet />
  </div>
);

const OrdersLayout = () => (
  <div>
    <p>This is the orders layout</p>
    <Outlet />
  </div>
);

const AdminLayout = () => (
  <div>
    <p>This is the admin layout</p>
    <Outlet />
  </div>
);

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Is />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="store" element={<StoreLayout />}>
          <Route index element={<p>ProductsList</p>} />
          <Route path="cart" element={<p>Cart</p>} />
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="messages" element={<MessagesLayout />}>
          <Route index element={<p>MessagesList</p>} />
          <Route path=":id" element={<p>Message</p>} />
        </Route>
        <Route path="projects" element={<ProjectsLayout />}>
          <Route index element={<p>ProjectsList</p>} />
          <Route path=":id" element={<ProjectLayout />}>
            <Route index element={<p>Project</p>} />
            <Route path="edit" element={<p>ProjectEdit</p>} />
          </Route>
          <Route path="add" element={<p>ProjectAdd</p>} />
        </Route>
        <Route path="orders" element={<OrdersLayout />}>
          <Route index element={<p>OrdersList</p>} />
          <Route path=":id" element={<p>Order</p>} />
        </Route>
      </Route>
      <Route path="wp-admin" element={<p>NotFound wordPress</p>} />
      <Route path="*" element={<p>NotFound nextTheme=nextTheme</p>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
