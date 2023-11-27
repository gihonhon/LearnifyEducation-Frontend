describe("Create Course Flow spec", () => {
  it("Should handle create course", () => {
    cy.intercept("POST", "/api/courses").as("courseApi");
    cy.visit("http://localhost:3000");
    cy.get(".md\\:flex > .h-10").click();
    cy.url().should("include", "/masuk");
    cy.get("#\\:r0\\:-form-item").click().type("learnify@gmail.com");
    cy.get("#\\:r1\\:-form-item").click().type("123456789");
    cy.get("form > .inline-flex").click();

    //
    cy.get(".aspect-square").click();
    cy.get("#radix-\\:r3\\:").contains("Dashboard").click();
    //
    cy.get("#\\:ri\\:-form-item").click().type("Belajar Bahasa Alien5");

    cy.get(".space-y-8 > .gap-x-2 > .bg-\\[\\#7c32a1\\]").click();
    cy.wait("@courseApi").then((interception) => {
      // Assert that the request was made
      expect(interception.request.method).to.equal("POST");
      expect(interception.request.url).to.include("/api/courses");
      expect(interception.response?.statusCode).to.equal(200);
    });
    //
  });
  it("Should handle edit course", () => {
    cy.visit("http://localhost:3000");
    cy.get(".md\\:flex > .h-10").click();
    cy.url().should("include", "/masuk");
    cy.get("#\\:r0\\:-form-item").click().type("learnify@gmail.com");
    cy.get("#\\:r1\\:-form-item").click().type("123456789");
    cy.get("form > .inline-flex").click();
    //
    cy.get(".aspect-square").click();
    cy.get("#radix-\\:r3\\:").contains("Dashboard").click();
    //
    cy.get(".border-r");
    cy.get(".flex-col > .text-sm").click();
    //
    cy.get(
      ".\\[\\&_tr\\:last-child\\]\\:border-0 > :nth-child(1) > :nth-child(3)"
    );
    cy.get("#radix-\\:rj\\:").contains("Edit").click();
  });
});
