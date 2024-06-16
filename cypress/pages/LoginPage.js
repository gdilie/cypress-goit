class LoginPage {
  get emailField() {
    return cy.get("#user_email");
  }

  get passwordField() {
    return cy.get("#user_password");
  }

  get loginTitle() {
    return cy.get(".next-10stgr7 > .next-c1vj7d");
  }

  get submitButton() {
    return cy.get("button[type='submit']");
  }

  navigateToLoginPage() {
    cy.viewport(1920, 1080);
    cy.visit("https://www.edu.goit.global/account/login");
  }

  verifyLoginTitle() {
    this.loginTitle.should("be.visible");
    this.loginTitle.should("have.text", "Login");
  }

  veirfyEmaiField() {
    this.emailField.should("be.visible");
  }

  inputEmail(email) {
    this.emailField.type(email);
  }

  verifyPasswordField() {
    this.passwordField.should("be.visible");
  }

  verifiyLoginButton() {
    this.submitButton.should("be.visible");
  }
}

export default LoginPage;
