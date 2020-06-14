import React, { Component } from "react";
import { Form, Input, Text } from "./ContactForm.styled";
import { Button } from "../PageFeatures/PageFeatures.styled";
export default class ContactForm extends Component {
  state = {
    successMessage: false,
    error: null,
  };
  postEmail = (ev) => {
    ev.preventDefault();

    return fetch(
      "https://jh5dx27gh8.execute-api.us-west-2.amazonaws.com/dev/email/send",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: ev.target.name.value,
          email: ev.target.email.value,
          content: ev.target.content.value,
        }),
      }
    )
      .then((res) =>
        !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
      )
      .then(() => {
        this.setState({ successMessage: true });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  };

  render() {
    const { error, successMessage } = this.state;
    return (
      <>
        {!successMessage && (
          <div>
            <div>
              Not sure if I can help? Send me an email with a brief description
              of your needs. I'll see what I can do.
            </div>
            <Form onSubmit={this.postEmail}>
              <label htmlFor="name">Name</label>
              <Input type="text" id="name" required />

              <label htmlFor="email">Email</label>
              <Input type="email" id="email" required />

              <label htmlFor="content">Message</label>
              <Text type="text" id="content" required />

              <Button contact type="submit">
                Send
              </Button>
            </Form>
          </div>
        )}
        {error && <p>Something went wrong. Please refresh and try again.</p>}
        {successMessage && (
          <p>Thank you for your email. I will be contacting you soon.</p>
        )}
      </>
    );
  }
}
