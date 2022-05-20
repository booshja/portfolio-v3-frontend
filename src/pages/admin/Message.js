// dependencies
import React from 'react';
import { useParams } from 'react-router';
// import styled from "styled-components";

const Message = () => {
  const { messageId } = useParams();

  return <div>{messageId}</div>;
};

export default Message;
