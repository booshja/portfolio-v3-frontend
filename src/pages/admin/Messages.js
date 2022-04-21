/* eslint-disable */
// dependencies
import React, { useState } from "react";
import styled from "styled-components";
// components
import { LoadingSpinner, MessageItem } from "../../components";
// services
import {
  useGetMessagesQuery,
  useToggleArchiveMutation,
  useDeleteMessageMutation,
} from "../../services/booshjaAPI";

const MessageListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 2rem;
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

const ErrorMessage = styled.p`
  font-size: 3rem;
  color: white;
`;

const Messages = () => {
  const { data, isFetching, isSuccess, isError, error } = useGetMessagesQuery();
  const [toggleArchive, { isLoading: toggleLoading }] =
    useToggleArchiveMutation();
  const [deleteMessage, { isLoading: deleteLoading }] =
    useDeleteMessageMutation();

  const [showArchived, setShowArchived] = useState(false);

  const handleArchive = async (id, archive) => {
    try {
      await toggleArchive({ id, archive }).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMessage(id);
    } catch (err) {
      console.log(err);
    }
  };

  if (isFetching || toggleLoading || deleteLoading) return <LoadingSpinner />;

  let content;

  if (isSuccess) {
    if (data.active.length || data.archived.length) {
      if (!showArchived) {
        content = (
          <MessageListContainer>
            {data.active.map((message) => (
              <MessageItem
                message={message}
                handleArchive={handleArchive}
                handleDelete={handleDelete}
                key={message.id}
              />
            ))}
          </MessageListContainer>
        );
      } else {
        content = (
          <MessageListContainer>
            {data.archived.map((message) => (
              <MessageItem
                message={message}
                handleArchive={handleArchive}
                handleDelete={handleDelete}
                key={message.id}
              />
            ))}
          </MessageListContainer>
        );
      }
    } else {
      content = (
        <MessageListContainer>
          <ErrorMessage>No messages found!</ErrorMessage>
        </MessageListContainer>
      );
    }
  } else if (isError) {
    content = <ErrorMessage>{error.toString()}</ErrorMessage>;
  }

  return (
    <>
      <ArchivedToggle onClick={() => setShowArchived((prev) => !prev)}>
        See {showArchived ? "Active" : "Archived"} Messages
      </ArchivedToggle>
      <MessageListContainer>{content}</MessageListContainer>
    </>
  );
};

export default Messages;
