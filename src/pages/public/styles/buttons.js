// dependencies
import styled from "styled-components";

const FormSubmitBtn = styled.button`
  align-self: flex-end;
  background-color: #68a2b9;
  border-radius: 4px;
  border: 2px solid #68a2b9;
  color: ${(props) => props.theme.textPrimary};
  transition: background-color 400ms;
  padding: 5px 10px;
  font-size: 2rem;

  &:hover {
    background-color: ${(props) => props.theme.bgSecondary};
    cursor: pointer;
  }
`;

// eslint-disable-next-line
export { FormSubmitBtn };
