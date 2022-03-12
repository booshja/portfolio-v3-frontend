// dependencies
import styled from "styled-components";

const MyName = styled.h1`
  font-size: 12rem;
  font-weight: 700;
  letter-spacing: 5%;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.textPrimary};
`;

const MyTitle = styled.p`
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 2.5%;
  color: ${(props) => props.theme.textSecondary};
`;

const PageTitle = styled.h1`
  color: ${(props) => props.theme.textPrimary};
  align-self: flex-start;
  justify-self: flex-start;
  font-size: 4rem;
`;

const Hi = styled.span`
  color: inherit;
  font-weight: 700;
  font-size: 2.8rem;
  font-family: Poppins, sans-serif;
`;

const StoryGreeting = styled.h2`
  color: ${(props) => props.theme.textPrimary};
  font-size: 3rem;
  margin: 3rem 0 1rem 0;
`;

const StoryText = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2rem;
  margin: 1rem 0 1rem 2rem;
  line-height: 1.5;
  background: transparent;
`;

const StoryLink = styled.a`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2rem;
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    filter: brightness(60%);
  }
`;

const SkillsHeader = styled.h2`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2.6rem;
  font-weight: 700;
  margin: 2rem 0;
`;

const SkillsList = styled.ul`
  padding-left: 2rem;
  height: 40%;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Skill = styled.li`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2rem;
  margin: 1rem 0;
`;

const ContactText = styled.p`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.textPrimary};
  margin: 2rem 0 1rem 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0 0 2rem;
`;

const ContactLabel = styled.label`
  font-size: 2rem;
  color: ${(props) => props.theme.textPrimary};
  margin-bottom: 0.5rem;
`;

const ContactInput = styled.input`
  padding: 0.5rem;
  font-size: 1.8rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  width: calc(100% - 1rem);
`;

const ContactTextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1.8rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  width: calc(100% - 1rem);
`;

const ExpList = styled.ul`
  color: ${(props) => props.theme.textPrimary};
  padding: 2rem 0 3rem 3rem;
`;

const ExpItemName = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-left: -1rem;
`;

const ExpItemText = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  span {
    font-size: inherit;
    font-style: italic;
    font-weight: 700;
  }
`;

const ExpCardLink = styled.a`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 3.5rem;
    margin-right: 1.25rem;
  }

  &:hover {
    font-style: italic;
  }
`;

const ExpItem = styled.li`
  color: ${(props) => props.theme.textPrimary};
  font-size: 1.8rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  min-height: 300px;
`;

const TagList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
  width: 90%;
  margin-top: 1rem;
`;

const Tag = styled.li`
  border-radius: 15px;
  background-color: ${(props) => props.theme.bgCard};
  color: ${(props) => props.theme.bgPrimary};
  ${(props) => props.theme.themeName === "Light" && "color: #000000;"};
  border: ${(props) =>
    props.theme.themeName === "Light" ? "2px solid #000000" : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  padding: 0.75rem 1.5rem;
  margin: 0 2rem 2rem 0;
`;

export {
  MyName,
  MyTitle,
  PageTitle,
  Hi,
  StoryGreeting,
  StoryLink,
  StoryText,
  SkillsHeader,
  SkillsList,
  Skill,
  ContactForm,
  ContactInput,
  ContactLabel,
  ContactText,
  ContactTextArea,
  ExpItemName,
  ExpItemText,
  ExpList,
  ExpCardLink,
  ExpItem,
  Tag,
  TagList,
};
