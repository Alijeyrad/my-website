/* eslint-disable no-console */
import React, { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    emptyField: false,
    emailNotValid: false,
  });

  function validateEmail(input) {
    return input
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  }

  const handleSubmit = () => {
    if (name && email && message) {
      setErrors({
        ...errors,
        emptyField: false,
      });
      console.log('Name: ', name);
      console.log('Email: ', email);
      console.log('Message: ', message);
      setSubmitted(true);
    } else {
      setErrors({
        ...errors,
        emptyField: true,
      });
    }
  };

  const handleChangeInputName = (event) => {
    setName(event.target.value);
  };

  const handleChangeInputEmail = (event) => {
    if (validateEmail(event.target.value)) {
      setEmail(event.target.value);
      setErrors({
        ...errors,
        emailNotValid: false,
      });
    } else {
      setEmail('');
      setErrors({
        ...errors,
        emailNotValid: true,
      });
    }
  };

  const handleChangeInputMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleAnotherMessage = () => {
    setSubmitted(false);
  };

  return (
    <div className="pt-4 pb-4 me-4 ms-4 mt-5 row justify-content-md-center">
      <div className="col-md-5 shadow p-3">
        {submitted ? (
          <>
            <h4 className="mb-4">
              Thank you for your message
              {' '}
              {name}
            </h4>
            <Button handleClick={handleAnotherMessage}>
              Submit another message
            </Button>
          </>
        ) : (
          <>
            <div className="form">
              <h3 className="mb-3">Tell me:</h3>
              <TextInput
                handleOnChange={handleChangeInputName}
                type="text"
                placeholder="Your Name"
              />
              <TextInput
                handleOnChange={handleChangeInputEmail}
                type="email"
                placeholder="Email"
              />
              {errors.emailNotValid && (
              <span className="ps-2 text-danger">*Email is not valid</span>
              )}
              <textarea
                className="form-control mt-2 mb-2 p-2"
                onChange={handleChangeInputMessage}
                placeholder="What's on your mind?"
              />
              {errors.emptyField && (
              <span className="ps-2 text-danger">
                *Some fields are empty or invalid
              </span>
              )}
            </div>
            <Button
              handleClick={handleSubmit}
              style={{ marginTop: '5px' }}
            >
              Submit
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Contact;
