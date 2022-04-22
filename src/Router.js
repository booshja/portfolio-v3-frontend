// dependencies
import React from "react";
// components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router";
// layouts
import { PublicLayout } from "./pages/public/styles/layouts";
import { AdminLayout, MessagesLayout } from "./pages/admin/styles/layouts";
// pages
import {
  About,
  // Cart,
  Contact,
  Dashboard,
  Experience,
  Is,
  Login,
  Message,
  Messages,
  NotFound,
  Orders,
  Projects,
  //   Store,
} from "./pages";

// const PublicLayout = () => (
//   <div>
//     <h1>This is the PUBLIC LAYOUT</h1>
//     <Outlet />
//   </div>
// );

const StoreLayout = () => (
  <div>
    <p>This is the store layout</p>
    <Outlet />
  </div>
);

// const MessagesLayout = () => (
//   <div>
//     <p>This is the messages layout</p>
//     <Outlet />
//   </div>
// );

const ProjectsLayout = () => (
  <div>
    <p>This is the projects layout</p>
    <Outlet />
  </div>
);

const ProjectLayout = () => (
  <div>
    <p>This is the individual project layout</p>
  </div>
);

const OrdersLayout = () => (
  <div>
    <p>This is the orders layout</p>
    <Outlet />
  </div>
);

// const AdminLayout = () => (
//   <div>
//     <p>This is the admin layout</p>
//     <Outlet />
//   </div>
// );

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Is />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="store" element={<h1>STORE PAGE</h1>} />
      </Route>
      <Route path="cart" element={<h1>Cart</h1>} />
      <Route path="login" element={<Login />} />
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="messages/*" element={<MessagesLayout />} />
        <Route path="projects" element={<ProjectsLayout />}>
          <Route index element={<Projects />} />
          <Route path="add" element={<h1>ProjectAdd</h1>} />
          <Route path=":id" element={<ProjectLayout />}>
            <Route index element={<h1>Project</h1>} />
            <Route path="edit" element={<h1>ProjectEdit</h1>} />
          </Route>
        </Route>
        <Route path="orders" element={<OrdersLayout />}>
          <Route index element={<Orders />} />
          <Route path=":id" element={<h1>Order</h1>} />
        </Route>
      </Route>
      <Route path="wp-admin" element={<NotFound wordPress />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
