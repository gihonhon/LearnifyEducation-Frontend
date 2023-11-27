describe("Login spec", () => {
  it("Should handle success login", () => {
    cy.visit("http://localhost:3000");
    cy.get(".md\\:flex > .h-10").click();
    cy.url().should("include", "/masuk");
    cy.get("#\\:r0\\:-form-item").click().type("learnify@gmail.com");
    cy.get("#\\:r1\\:-form-item").click().type("123456789");
    cy.get("form > .inline-flex").click();
  });

  it("Should handle error login", () => {
    cy.visit("http://localhost:3000");
    cy.get(".md\\:flex > .h-10").click();
    cy.url().should("include", "/masuk");
    cy.get("#\\:r0\\:-form-item").click().type("learnify@gmail.com");
    cy.get("#\\:r1\\:-form-item").click().type("12345678");
    cy.get("form > .inline-flex").click();
  });
});
