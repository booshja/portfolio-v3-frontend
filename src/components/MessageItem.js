// dependencies
import React from 'react';
import styled from 'styled-components';
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// assets
import { faTrashCan, faBoxArchive } from '@fortawesome/free-solid-svg-icons';

const MessageContainer = styled.li`
  border: 1px solid ${({ theme: t }) => t.white};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 3rem;
  position: relative;

  p {
    margin-bottom: 1rem;
  }
`;

const ArchiveIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  top: 1rem;
  right: 1rem;
  position: absolute;
  color: ${({ theme: t }) => t.accent};

  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
`;

const GarbageIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  position: absolute;
  top: 5rem;
  right: 1rem;
  color: ${({ theme: t }) => t.red};

  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
`;

const MessageItem = ({ message, handleArchive, handleDelete }) => (
  <MessageContainer>
    <p>Name: {message.name}</p>
    <p>Email: {message.email}</p>
    <p>Message: {message.message}</p>
    <Link to={`${message.id}`}>View Message</Link>
    <ArchiveIcon
      icon={faBoxArchive}
      onClick={() => handleArchive(message.id, !message.isArchived)}
    />
    <GarbageIcon icon={faTrashCan} onClick={() => handleDelete(message.id)} />
  </MessageContainer>
);

export default MessageItem;
