// dependencies
import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { AdminHeadline } from "./styles/typography";
import { AdminPageContainer } from "./styles/containers";

const MessagesContainer = styled(AdminPageContainer)``;

const Messages = () => {
  useEffect(() => {
    console.log("messages");
  }, []);
  return (
    <MessagesContainer>
      <AdminHeadline>messages()</AdminHeadline>
    </MessagesContainer>
  );
};

export default Messages;
