
describe('testing with locators', () => {
  it('test one positive', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/")

    cy.title().should("eq", "OrangeHRM")

    cy.xpath("//input[@placeholder='Username']").type("Admin")
    
    cy.get("[name='password']").type("admin123")           
    
    cy.get('.orangehrm-login-branding > img').should("be.visible")  // -- CSS class locator --
      
    cy.get("[type='submit']").click()                         // --CSS attribute locator --

    cy.xpath("//input[@placeholder='Search']").type("Admin")  // --Xpath locator --

  })
}) 



























































