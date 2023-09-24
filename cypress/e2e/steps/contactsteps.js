import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";

const homePage = new HomePage();
const contactPage = new ContactPage();

Given("I am on the Jupiter Toys home page", () => {
  cy.visit("https://jupiter.cloud.planittesting.com/");
});

And("I navigate to {string} page", (page) => {
  homePage.selectMenuItem(page.toLowerCase());
});

When(
  "I enter the following values into the form and {string}",
  (action, datatable) => {
    contactPage.enterContactData(datatable, action);
  }
);

Then("I should get the following error messages", (datatable) => {
  datatable.hashes().forEach((row) => {
    if (row.field === "Forename") {
      contactPage.validateIfForenameErrorDispayed(true);
      contactPage.validateForenameErrorText(row.value);
    } else if (row.field === "Email") {
      contactPage.validateIfEmailErrorDispayed(true);
      contactPage.validateEmailErrorText(row.value);
    } else if (row.field === "Message") {
      contactPage.validateIfMessageErrorDispayed(true);
      contactPage.validateMessageErrorText(row.value);
    }
  });
});

Then("I should not get any error messages", () => {
  contactPage.validateIfForenameErrorDispayed(false);
  contactPage.validateIfEmailErrorDispayed(false);
  contactPage.validateIfMessageErrorDispayed(false);
});

Then(
  "I should see the successful submission message like {string}",
  (expectedMessage) => {
    contactPage.validateSuccessfulMessage(expectedMessage);
  }
);
