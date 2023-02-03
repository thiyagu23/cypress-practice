
describe("PS Login Test", () => {
    it("should pass the login test", () => {
        cy.visit("https://pstest.avaniko.com/login")
        cy.title().should("eq", "Budy - Professional Services")
        cy.xpath("//img[contains(@class,'hp-mb-24')]").should("be.visible").and("exist")
        cy.get("h2").should("have.text", "Budy Professional Services")
        cy.get("#basic_userName").type("Manager").should("have.value", "Manager")
        cy.get("#basic_password").type("Avan!12345").wait(3000)
        cy.xpath("//span[@aria-label='eye-invisible']//*[name()='svg']").click().wait(3000)
        cy.get("button[type='submit']").click()
    })
})