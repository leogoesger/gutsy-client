import React from 'react';

import {history} from '../store/configureStore';
import {Link} from 'react-router-dom';

export function navigateTo(pathname, query) {
  history.push({pathname, query});
}

export function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

export function validatePassword(password) {
  if (password.length >= 4 && password.length <= 20) {
    return true;
  }
  return false;
}

export function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

export function getEmailErrorMessage(email) {
  if (email && !validateEmail(email)) {
    return 'Invalid Email address';
  }
}

export function getPasswordErrorMessage(password) {
  if (!password || validatePassword(password)) {
    return '';
  }
  if (!validatePassword(password)) {
    return 'Should be between 4 to 20 characters';
  }
}

export function getConfirmPasswordErrorMessage(password, confirmPassword) {
  if (
    password &&
    confirmPassword &&
    !validateConfirmPassword(password, confirmPassword)
  ) {
    return 'Passwords do not match';
  }
}

export function capitalize(string) {
  if (!string) {
    return;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isEmailError(error) {
  return error.errors[0].message === 'email must be unique';
}

export function renderAuthor(authors) {
  return authors.map((author, index) => {
    if (index === authors.length - 1) {
      return (
        <span className="author" key={index}>
          <Link to={`/authors/${author.id}`}>{`${author.firstName} ${
            author.lastName
          }`}</Link>
        </span>
      );
    }
    return (
      <span className="author" key={index}>
        <Link to={`/authors/${author.id}`}>{`${author.firstName} ${
          author.lastName
        }`}</Link>
        {', '}
      </span>
    );
  });
}
