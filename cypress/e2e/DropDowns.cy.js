describe("handling dropdown with select",() => {  
    it("should handle", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.xpath("//select[@id='zcf_address_country']").select("Italy").should("have.value", "Italy")
    })

    it("handling dropdown without select", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/").get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type("Italy").type('{enter}')
        cy.get("#select2-billing_country-container").should("have.text", "Italy")
    })

    it("Auto suggest Dropdown", () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("chennai")
        cy.get("#typeahead-suggestions").contains("Chennai Express").click()
    })

    it("Dynamic Dropdown", () => {
        cy.visit("https://www.google.co.in/")
        
        cy.get("input[title='Search']").type("chennai")

        cy.wait(2000)
        
        cy.get(".wM6W7d").should("have.length", 11)

        cy.get(".wM6W7d").each(($el, index, $list) => {
            if ($el.text() == "chennai corporation")
            {
                cy.wrap($el).click()
            }
        })
    })
})

