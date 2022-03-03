// dependencies
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
// components
import { PageContainer } from "./styles/containers";
import { PageTitle } from "./styles/typography";
// assets
import MailBoxes from "../../assets/po-boxes.jpeg";

const ContactContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgSecondary};
`;

const MainContent = styled.div`
  display: flex;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-top: 1rem;
`;

const RightSide = styled.div`
  display: flex;
  height: 75vh;
  margin-left: 8rem;
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

const FormError = styled.div`
  font-family: Poppins, sans-serif;
  border: solid 2px #e9072b;
  border-radius: 4px;
  background-color: #ffcccc;
  color: #000000;
  font-size: 1.4rem;
  padding: 1rem;
  margin: 0 0 1rem 1rem;
`;

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

const MailImg = styled.img`
  width: 100%;
`;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleDataSubmit = (data) => {
    // check against recaptcha here, then send data.
    console.log("Sending data...", data);
    console.log("..........");
    console.log("Data Sent.");
  };

  return (
    <ContactContainer>
      <PageTitle>contact()</PageTitle>
      <MainContent>
        <LeftSide>
          <ContactText>
            Have a question, thoughts, or want to work together?
          </ContactText>
          <ContactForm
            onSubmit={() => handleSubmit((data) => handleDataSubmit(data))}
          >
            <ContactLabel htmlFor="name">Name:</ContactLabel>
            <ContactInput
              type="text"
              placeholder="Namey McNameson"
              id="name"
              {...register("name", { required: "Name is required." })}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}
            <ContactLabel htmlFor="email">Email:</ContactLabel>
            <ContactInput
              type="text"
              placeholder="example@email.com"
              id="email"
              {...register("email", { required: "Email is required." })}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
            <ContactLabel htmlFor="name">Name:</ContactLabel>
            <ContactTextArea
              placeholder="I had an idea for you..."
              id="message"
              maxLength="200"
              rows="4"
              {...register("message", {
                required: "Message is required.",
                maxLength: {
                  value: 200,
                  message: "Maximum message length 200 characters.",
                },
              })}
            />
            {errors.message && <FormError>{errors.message.message}</FormError>}
            <FormSubmitBtn type="submit">Submit</FormSubmitBtn>
          </ContactForm>
        </LeftSide>
        <RightSide>
          <MailImg src={MailBoxes} alt="Wall of blue P.O. Boxes." />
        </RightSide>
      </MainContent>
    </ContactContainer>
  );
};

export default Contact;
