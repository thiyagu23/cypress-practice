/// <reference types = "Cypress" />

describe("Alerts", () => {
  // 1) javascript alert : it will have some text and an 'OK' button
  it("Js alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts"); 
    cy.get("button[onclick='jsAlert()']").click();

    cy.on("window:alert", (t) => {
      expect(t).to.contains("I am a JS Alert");
    });
    // cypress will automatically close the alert window  so don't need to write code for that
    // if we want to add some validate in alert then we need to write functionality like above function
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  // 2) javascript Confirm Alert : it will have some text with 'Ok' and 'Cancel' button
  it("Js confirm alert - OK", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });
    // cypress will automatically close the alert window by using 'OK button-default
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("Js confirm alert - Cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });

    cy.on("window:confirm", () => false); // cypress closes alert window using cancel button by default it is true

    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  // 3) javascript Prompt ALert : it will have some text with a text box for user input along with 'OK and 'Cancel' button

  it("Js Prompt alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((win) => {
      // in this method it will acess before alert window open
      cy.stub(win, "prompt").returns("welcome");
    });

    cy.get("button[onclick='jsPrompt()']").click();

    // cypress will close automatically promptrd alert using 'OK button by default

    // cy.on("window:prompt", () => false); // cypress closes alert window using cancel button by default it is true
    cy.get("#result").should("have.text", "You entered: welcome");
  });

  // 4) Authenticated Alert

  it.only("Authenticated alert", () => {
    //approach1
    // cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth:
    //                                                             {
    //                                                               username: "admin",
    //                                                               password: "admin"
    //                                                             }
    //                                                         });

    // cy.get("div[class='example'] p").should("have.contain", "Congratulations")

    //approach2

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("div[class='example'] p").should("have.contain", "Congratulations"); 
  });
});
