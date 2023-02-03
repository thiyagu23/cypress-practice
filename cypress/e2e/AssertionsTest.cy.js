describe("testing with assertions", () => {

    it("implicit assertions", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should("include", "orangehrmlive.com")

        //--- should assertion ---

        // cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // .should("contain", "orangehrmlive")
         
        //--- and assertion ---

        cy.url().and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .and("contain", "orangehrmlive")


        cy.title().should("eq", "OrangeHRM")
        .and("contain", "Orange")

        cy.get('.orangehrm-login-branding > img').should("be.visible")  
        .and("exist")

        cy.xpath("//a").should("have.length", "5")  
    })

    it("explicit assertions", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//input[@placeholder='Username']").type("Admin").should("have.value", "Admin")
        cy.get("[name='password']").type("admin123") 
        cy.get("[type='submit']").click()

        let expName = "Paul aaaaaa"
        
        cy.get(".oxd-userdropdown-name").then( (x) => {
    
            let actName = x.text()
    
            //---- BDD type assertion (Behavioral Driven Development) ----
                
            expect(actName).to.eq(expName)
            // expect(actName).to.not.eq(expName)
    
            //---- TDD type assertion (Test Driven Development) ----
    
            assert.equal(actName, expName)
        })
    })
})