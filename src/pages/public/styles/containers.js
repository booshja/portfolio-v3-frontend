import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-top: -60px;
  padding: 8rem 10rem 0 10rem;
`;

/** Dividers *********************************************/

const LandingDivider = styled.div`
  width: 45%;
  height: 4px;
  background-color: ${(props) => props.theme.accent};
  margin-bottom: 3rem;
`;

export { PageContainer, LandingDivider };
