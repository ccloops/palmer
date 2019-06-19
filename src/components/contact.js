import React from 'react';
import styled from 'styled-components';

const SectionHeader = styled.section`
  text-align: center;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 3em;
  margin-bottom: 0.5em;
`;

const SubTitle = styled.h3`
  font-size: 1.7em;
  margin-bottom: 0.5em;
  color: #527590;
`;

const HorizontalRow = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  margin-bottom: 3em;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 50%;
`;

const TextField = styled.input`
  border: green;
  margin: 1em;
  font-family: 'Lekton';
  font-size: 1.5em;
`;

const TextArea = styled.textarea`
  border: red;
  margin: 1em;
  display: block;
  font-family: 'Lekton';
  font-size: 1.5em;
`;

const SubmitButton = styled.button`
  color: white;
  background-color: #527590;
  font-family: 'Lekton';
  padding: 0.5em;
  font-size: 1em;
`;

const Contact = () => (
  <div>
    <SectionHeader>
      <Title>Interested in a consultation?</Title> 
      <SubTitle>We would love to help you achieve your paint goals</SubTitle>
    </SectionHeader>
    <HorizontalRow />
    <Form>
      <TextField type="text" placeholder="Enter your name" />
      <TextField type="text" placeholder="Enter your email" />
      <TextArea rows="4" cols="50" placeholder="Tell us about your project. How can we help?" />
      <SubmitButton type="submit" value="Submit">Send Message</SubmitButton>
    </Form>
  </div>
);

export default Contact;
