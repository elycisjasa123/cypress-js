/// <reference types="cypress" />
import {
  falseCredentials,
  loginSuccessMessage,
  urlSuccess,
  errorMessageUsername,
  errorMessagePassword,
  successfullyDone,
} from "../../fixtures/loginData.json";

const { username, password } = falseCredentials;

context("Login Practice Automation", () => {
  beforeEach(() => {
    cy.viewport(1440, 720);
    cy.visit(`${Cypress.env("BASE_URL")}`);
  });

  afterEach(() => {
    cy.log(successfullyDone);
  });

  it("Positive LogIn test", () => {
    // Login user
    cy.loginCredentials(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
    cy.assertSuccess(urlSuccess, loginSuccessMessage);
    cy.logoutUser();
  });

  it("Negative username test", () => {
    cy.loginCredentials(username, Cypress.env("PASSWORD"));
    cy.snackbarMessage(errorMessageUsername);
  });

  it("Negative password test", () => {
    cy.loginCredentials(Cypress.env("USERNAME"), password);
    cy.snackbarMessage(errorMessagePassword);
  });
});
