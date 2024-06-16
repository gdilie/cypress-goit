describe("Api Tests", () => {
  it("Verify POST request with POST method", () => {
    const requestBody = {
      test: "body",
    };

    const request = {
      url: "https://httpbin.org/post",
      method: "POST",
      failOnStatusCode: false,
      body: requestBody,
    };

    cy.request(request).then((response) => {
      let status = response.status;
      console.log(response);
      expect(response.body.data).to.include("body");
      assert.equal(200, status);
    });
  });

  it("Verify if POST request can be executed with GET method", () => {
    const request = {
      url: "https://httpbin.org/post",
      method: "GET",
      failOnStatusCode: false,
    };

    cy.request(request).then((response) => {
      let status = response.status;
      console.log(response);

      assert.equal(405, status);
    });

    it("Verify GET request with query parameters", () => {
      const request = {
        url: "https://httpbin.org/get",
        method: "GET",
        failOnStatusCode: false,
        qs: {
          id: 10,
        },
      };

      cy.request(request).then((response) => {
        let status = response.status;
        console.log(response);
        expect(response.body.args.id).to.equal("10");
        assert.equal(200, status);
      });
    });

    it("Verify GET request with custom headers", () => {
      const request = {
        url: "https://httpbin.org/get",
        method: "GET",
        failOnStatusCode: false,
        headers: {
          newHeader: "custom-header",
          "user-agent": "new agent",
        },
      };

      cy.request(request).then((response) => {
        let status = response.status;
        console.log(response);
        assert.equal(200, status);
        assert.equal(response.requestHeaders.newHeader, status);
      });
    });
  });
});
