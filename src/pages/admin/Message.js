// dependencies
import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { AdminHeadline } from "./styles/typography";
import { AdminPageContainer } from "./styles/containers";

const MessageContainer = styled(AdminPageContainer)``;

const Message = () => {
  useEffect(() => {
    console.log("message");
  }, []);
  return (
    <MessageContainer>
      <AdminHeadline>message()</AdminHeadline>
    </MessageContainer>
  );
};

export default Message;
