import LoginPage from "../pages/LoginPage.js";

describe("Login Tests", () => {
  it("Visit goit login page", () => {
    const login = new LoginPage();

    login.navigateToLoginPage();
    login.veirfyEmaiField();
    login.verifyPasswordField();
    login.verifiyLoginButton();
    login.inputEmail("email@email.com");
  });
});
