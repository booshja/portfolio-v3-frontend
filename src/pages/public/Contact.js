// dependencies
import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
// components
import {
  PageContainer,
  MainContent,
  LeftSide,
  FormError,
  MailImg,
} from "./styles/containers";
import { FormSubmitBtn } from "./styles/buttons";
import { LoadingSpinner } from "../../components";
import {
  PageTitle,
  ContactForm,
  ContactInput,
  ContactLabel,
  ContactText,
  ContactTextArea,
} from "./styles/typography";
// assets
import MailBoxes from "../../assets/po-boxes.jpeg";

const ContactContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgSecondary};
`;

const RightSide = styled.div`
  display: flex;
  height: 75vh;
  margin-left: 8rem;
`;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [approval, setApproval] = useState(false);
  const [error, setError] = useState(false);

  const handleDataSubmit = (data) => {
    setLoading(true);
    try {
      // check against recaptcha
      // send data to API
      console.log(data);
      setApproval(true);
    } catch (err) {
      console.log(err);
      setError(true);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <ContactContainer>
        <PageTitle>contact()</PageTitle>
        <MainContent className="center">
          <LoadingSpinner />
        </MainContent>
      </ContactContainer>
    );
  }

  return (
    <ContactContainer>
      <PageTitle>contact()</PageTitle>
      {/* {loading && <LoadingSpinner />} */}
      {/* {approval && <Approval />} */}
      {/* {error && <Error />} */}
      {!loading && !approval && !error && (
        <MainContent className="slide-in-left">
          <LeftSide>
            <ContactText>
              Have a question, thoughts, or want to work together?
            </ContactText>
            <ContactForm
              onSubmit={handleSubmit((data) => handleDataSubmit(data))}
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
              {errors.message && (
                <FormError>{errors.message.message}</FormError>
              )}
              <FormSubmitBtn type="submit">Submit</FormSubmitBtn>
            </ContactForm>
          </LeftSide>
          <RightSide>
            <MailImg src={MailBoxes} alt="Wall of blue P.O. Boxes." />
          </RightSide>
        </MainContent>
      )}
    </ContactContainer>
  );
};

export default Contact;
