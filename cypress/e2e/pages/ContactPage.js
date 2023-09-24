class ContactPage {
  elements = {
    txtForeName: () => cy.get("#forename"),
    txtEmail: () => cy.get("#email"),
    txtMessage: () => cy.get("#message"),
    btnSubmit: () => cy.get(".btn-contact"),
    lblForenameError: () => cy.get("#forename-err"),
    lblEmailError: () => cy.get("#email-err"),
    lblMessageError: () => cy.get("#message-err"),
    lblSuccessMessage: () => cy.get(".alert-success", { timeout: 60000 }),
    forename: "",
  };

  enterContactData(contactData, action) {
    contactData.hashes().forEach((data) => {
      if (data.field === "Forename") {
        this.elements.txtForeName().type(data.value);
        this.elements.forename = data.value;
      }
      if (data.field === "Email") this.elements.txtEmail().type(data.value);
      if (data.field === "Message") this.elements.txtMessage().type(data.value);
    });
    if (action === "submit") this.elements.btnSubmit().click();
  }

  validateIfForenameErrorDispayed(expected) {
    if (expected == true) {
      this.elements.lblForenameError().should("be.visible");
    } else {
      this.elements.lblForenameError().should("not.exist");
    }
  }
  validateIfEmailErrorDispayed(expected) {
    if (expected == true) {
      this.elements.lblEmailError().should("be.visible");
    } else {
      this.elements.lblEmailError().should("not.exist");
    }
  }

  validateIfMessageErrorDispayed(expected) {
    if (expected == true) {
      this.elements.lblMessageError().should("be.visible");
    } else {
      this.elements.lblMessageError().should("not.exist");
    }
  }

  validateForenameErrorText(expectedError) {
    this.elements.lblForenameError().contains(expectedError);
  }

  validateEmailErrorText(expectedError) {
    this.elements.lblEmailError().contains(expectedError);
  }

  validateMessageErrorText(expectedError) {
    this.elements.lblMessageError().contains(expectedError);
  }

  validateSuccessfulMessage(expectedMessage) {
    let name = this.elements.forename;
    expectedMessage = expectedMessage.replace("<forename>", name);
    cy.log(expectedMessage);

    this.elements.lblSuccessMessage().contains(expectedMessage);
  }
}
export default ContactPage;
