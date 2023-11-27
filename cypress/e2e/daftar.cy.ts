describe("Daftar as Teacher Test Spec", () => {
  it("should handle a successful API response after clicking the button", () => {
    cy.intercept("POST", "/api/user").as("userApi");
    cy.visit("http://localhost:3000");
    cy.contains("Yuk, Ikutan").should("exist");
    cy.get(".h-full").should("exist");
    cy.get(".fixed").should("exist");

    // Login/Register Buttonn
    cy.get(".md\\:flex > .h-10").click();
    cy.url().should("include", "/masuk");

    // Daftar Form Option
    cy.get(":nth-child(5) > .text-blue-600").click();
    cy.url().should("include", "/daftar");
    // As Teacher
    cy.get("#radix-\\:r2\\:-trigger-teacher").click();
    cy.get("#\\:r8\\:-form-item").click().type("Gihon");
    cy.get("#\\:r9\\:-form-item").click().type("gihon@gmail.com");
    cy.get("#\\:ra\\:-form-item").click().type("123456789");

    cy.get("form > .inline-flex").click();
    cy.wait("@userApi").then((interception) => {
      // Assert that the request was made
      expect(interception.request.method).to.equal("POST");
      expect(interception.request.url).to.include("/api/user");
      expect(interception.response?.statusCode).to.equal(200);
    });
  });
  it("should handle a 400 response after clicking the button", () => {
    // Stub the API request and force it to return a 400 response
    cy.intercept("POST", "/api/user", { statusCode: 400 }).as("userApi");

    // Visit your page
    cy.visit("http://localhost:3000"); // Replace with the actual URL of your page

    cy.contains("Yuk, Ikutan").should("exist");
    cy.get(".h-full").should("exist");
    cy.get(".fixed").should("exist");

    // Login/Register Buttonn
    cy.get(".md\\:flex > .h-10").click();
    cy.url().should("include", "/masuk");

    // Daftar Form Option
    cy.get(":nth-child(5) > .text-blue-600").click();
    cy.url().should("include", "/daftar");
    // As Teacher
    cy.get("#radix-\\:r2\\:-trigger-teacher").click();
    cy.get("#\\:r8\\:-form-item").click().type("Gihon");
    cy.get("#\\:r9\\:-form-item").click().type("gihon@gmail.com");
    cy.get("#\\:ra\\:-form-item").click().type("123456789");

    cy.get("form > .inline-flex").click();

    // Wait for the API request to be called
    cy.wait("@userApi").then((interception) => {
      // Assert that the request was made
      expect(interception.request.method).to.equal("POST");
      expect(interception.request.url).to.include("/api/user");

      // Assert that the response has a status code of 400
      expect(interception.response?.statusCode).to.equal(400);
    });

    // Add additional assertions based on your application's behavior for a 400 response
  });
});
