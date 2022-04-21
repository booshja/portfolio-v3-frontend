// dependencies
import React from "react";
import styled from "styled-components";
// components
import { Outlet } from "react-router";
import { AdminHeadline } from "../typography";
import { AdminPageContainer } from "../containers";

const MessagesContainer = styled(AdminPageContainer)`
  position: relative;
`;

const MessagesLayout = () => (
  <MessagesContainer>
    <AdminHeadline>messages()</AdminHeadline>
    <Outlet />
  </MessagesContainer>
);

export default MessagesLayout;
