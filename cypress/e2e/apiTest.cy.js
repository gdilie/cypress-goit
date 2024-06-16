describe("Api Tests", () => {
  it("test1", () => {
    cy.request({
      url: "https://httpbin.org/get",
      method: "GET",
      failOnStatusCode: false,
      headers: {
        newHeader: "custom-header",
        "user-agent": "new agent",
      },
    }).as("getRequest");

    cy.get("@getRequest").then((response) => {
      cy.log(response);
    });

    cy.get("@getRequest").then((response) => {
      cy.log(response);
    });

    cy.get("@getRequest").then((response) => {
      cy.log(response);
    });

    cy.get("@getRequest").then((response) => {
      cy.log(response);
    });

    cy.get("@getRequest").then((response) => {
      cy.log(response);
    });

    cy.get("@getRequest").then((response) => {
      cy.log(response);
    });
  });
});
