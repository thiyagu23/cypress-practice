
describe("checking UI elements", () => {
    it("radio button tests", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        cy.xpath("//input[@id='female']").should("be.visible").check().and("be.checked")
        
        cy.xpath("//input[@id='male']").should("be.visible").and("not.be.checked")
    })

    it("checkbox tests", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        cy.xpath("//input[@id='tuesday']").should("be.visible").check().and("be.checked")

        cy.get("input.form-check-input[type='checkbox']").should("be.visible").check().and("be.checked")

        cy.xpath("//input[@id='tuesday']").uncheck().and("not.be.checked")

        cy.get("input.form-check-input[type='checkbox']").first().uncheck()
        cy.get("input.form-check-input[type='checkbox']").last().uncheck()
    })
})