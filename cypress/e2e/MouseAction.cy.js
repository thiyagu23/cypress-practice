import "cypress-iframe";
require("@4tw/cypress-drag-drop");
//to use drag and drop methods

describe("Mouse operations", () => {
  it("Mouse hover", () => {
    cy.visit("https://demo.opencart.com/");
    cy.get(
      ":nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link"
    ).should("not.be.visible");
    //if locator is lengthy choose locator from cypress-chrome automated page
    cy.get(".nav > :nth-child(1) > .dropdown-toggle")
      .trigger("mouseover")
      .click();
    cy.get(
      ":nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link"
    ).should("be.visible");
  });
  it("Right click", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    //approach1
    cy.get(".context-menu-one").trigger("contextmenu");
    cy.get(".context-menu-icon-copy").should("be.visible").wait(2000).click();
    //approach2
    cy.get(".context-menu-one").rightclick();
    cy.get(".context-menu-icon-copy").should("be.visible").wait(2000).click();
  });

  it("Double click", () => {
    //approach1 - dblclick()
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
    );
    cy.frameLoaded("#iframeResult"); //load the frame
    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .dblclick()
      .wait(1000);
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");

    // //approach2 - trigger()
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
    );
    cy.frameLoaded("#iframeResult");
    //load the frame
    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .trigger("dblclick")
      .wait(1000);
    cy.iframe("#iframeResult")
      .find("#field2")
      .should("have.value", "Hello World!");
  });

  it("Drag and drop using plugins", () => {
    cy.visit(
      "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    cy.get("#box6").should("be.visible");
    cy.get("#box106").should("be.visible");

    cy.wait(3000);
    cy.get("#box6").drag("#box106", { force: true }); //force:true - if the element is hidden it will get the element forcefully and perform action
    //drag & drop plugin approach is preferrable and easier than trigger approach
  });
  //get - source element & drag - target element

  it.only("Scrolling page", () => {
    //scrolling down
    cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
     cy.get("img[alt='Flag of India']").scrollIntoView({ duration: 2000 }); //specifying duration for scrolling speed
     cy.get("img[alt='Flag of India']").should("be.visible").wait(1000); //scrolling up
     cy.get("img[alt='Flag of Argentina']").scrollIntoView({ duration: 2000 });
     cy.get("img[alt='Flag of Argentina']").should("be.visible");
     //scrolling to bottom
     cy.get("#footer").scrollIntoView({ duration: 3000 });
     cy.get("#footer").should("be.visible");
  });
});
