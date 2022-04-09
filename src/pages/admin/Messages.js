// dependencies
import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { AdminHeadline } from "./styles/typography";
import { AdminPageContainer } from "./styles/containers";
import { MessageItem } from "../../components";

const messages = [
  {
    id: 1,
    name: "Person McPersonson",
    email: "person@email.com",
    message:
      "Hello, this is a message. Congrats on having a message! This sure is a good one!",
  },
  {
    id: 2,
    name: "Person McPersonson",
    email: "person@email.com",
    message:
      "Hello, this is a message. Congrats on having a message! This sure is a good one!",
  },
  {
    id: 3,
    name: "Person McPersonson",
    email: "person@email.com",
    message:
      "Hello, this is a message. Congrats on having a message! This sure is a good one!",
  },
  {
    id: 4,
    name: "Person McPersonson",
    email: "person@email.com",
    message:
      "Hello, this is a message. Congrats on having a message! This sure is a good one!",
  },
  {
    id: 5,
    name: "Person McPersonson",
    email: "person@email.com",
    message:
      "Hello, this is a message. Congrats on having a message! This sure is a good one!",
  },
  {
    id: 6,
    name: "Person McPersonson",
    email: "person@email.com",
    message:
      "Hello, this is a message. Congrats on having a message! This sure is a good one!",
  },
];

const MessageListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const MessagesContainer = styled(AdminPageContainer)`
  position: relative;
`;

const ArchivedToggle = styled.button`
  color: ${({ theme: t }) => t.textPrimary};
  background-color: ${({ theme: t }) => t.buttonGreen};
  font-size: 2rem;
  padding: 0.5rem 1rem;
  position: absolute;
  top: 2rem;
  right: 4rem;
  border: 2px solid ${({ theme: t }) => t.textPrimary};
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme: t }) => t.bgPrimary};
  }
`;

const Messages = () => {
  useEffect(() => {
    // console.log("messages");
  }, []);

  return (
    <MessagesContainer>
      <AdminHeadline>messages()</AdminHeadline>
      <ArchivedToggle>See Archived Messages</ArchivedToggle>
      <MessageListContainer>
        {messages.map((message) => (
          <MessageItem message={message} key={message.id} />
        ))}
      </MessageListContainer>
    </MessagesContainer>
  );
};

export default Messages;
