// dependencies
import React from 'react';
import styled from 'styled-components';
// components
import { Outlet, Routes, Route } from 'react-router';
import { AdminHeadline } from '../typography';
import { AdminPageContainer } from '../containers';
// pages
import Message from '../../Message';
import Messages from '../../Messages';

const MessagesContainer = styled(AdminPageContainer)`
  position: relative;
`;

const MessagesLayout = () => (
  <MessagesContainer>
    <AdminHeadline>messages()</AdminHeadline>
    <Outlet />

    <Routes>
      <Route index element={<Messages />} />
      <Route path=":id" element={<Message />} />
    </Routes>
  </MessagesContainer>
);

export default MessagesLayout;
