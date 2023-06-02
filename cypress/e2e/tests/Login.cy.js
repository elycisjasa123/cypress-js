/// <reference types="cypress" />
import {
  falseCredentials,
  loginSuccessMessage,
  urlSuccess,
  errorMessageUsername,
  errorMessagePassword,
  successfullyDone,
  ENVIRONMENT
} from "../../fixtures/loginData.json";

const { USERNAME, PASSWORD, BASE_URL } = ENVIRONMENT;
const { username, password } = falseCredentials;

context("Login Practice Automation", () => {
  beforeEach(() => {
    cy.viewport(1440, 720);
    cy.visit(`${BASE_URL}`);
  });

  afterEach(() => {
    cy.log(successfullyDone);
  });

  it("Positive LogIn test", () => {
    // Login user
    cy.loginCredentials(USERNAME, PASSWORD);
    cy.assertSuccess(urlSuccess, loginSuccessMessage);
    cy.logoutUser();
  });

  it("Negative username test", () => {
    cy.loginCredentials(username, PASSWORD);
    cy.snackbarMessage(errorMessageUsername);
  });

  it("Negative password test", () => {
    cy.loginCredentials(USERNAME, password);
    cy.snackbarMessage(errorMessagePassword);
  });
});
