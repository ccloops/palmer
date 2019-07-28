import React, { Component } from 'react';
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
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
  padding: 3em 2em;
`;

const TextField = styled.input`
  border: green;
  margin-top: 1em;
  font-family: 'Lekton';
  font-size: 1.5em;

    @media(max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      width: 100%;
      font-size: 1em;
    }
`;

const TextArea = styled.textarea`
  border: red;
  margin-top: 1em;
  font-family: 'Lekton';
  font-size: 1.5em;

    @media(max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: left;
      width: 100%;
      font-size: 1em;
    }
`;

const SubmitButton = styled.button`
  color: white;
  background-color: #527590;
  font-family: 'Lekton';
  padding: 0.5em;
  font-size: 1em;
  margin-top: 1em;
`;

export default class Contact extends Component {
  state = {
    jobs: [],
    name: '',
    job: {
      name: '',
      email: '',
      message: ''
    },
    email: '',
    message: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      job: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      },
    });
  };

  render() {
    const { handleSubmit } = this;
    console.log('this.state', this.state);
    return (

      <div>
        <SectionHeader>
          <Title>Interested in a consultation?</Title>
          <SubTitle>We would love to help you achieve your paint goals</SubTitle>
        </SectionHeader>
        <HorizontalRow />
        <Form onSubmit={
          handleSubmit
        }
        >
          <TextField
            type="text"
            placeholder="Enter your name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <TextField
            type="text"
            placeholder="Enter your email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <TextArea
            rows="4"
            cols="50"
            placeholder="Tell us about your project. How can we help?"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            required
          />
          <SubmitButton
            type="submit"
            value="Submit"
          >
          Send Message
          </SubmitButton>
        </Form>
      </div>
    );
  }
}
