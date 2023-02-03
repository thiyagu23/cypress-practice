describe("Handle Tables", () => {
  beforeEach(() => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get("button[type='submit']").click();

    cy.get(".btn-close").click();
    // customers ---> customers

    cy.get("#menu-customer>a").click(); // customer main menu
    cy.get("#menu-customer>ul>li:first-child").click(); // customers subitem
  });

  it.skip("Check Number Rows & Columns", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should(
      "have.length",
      "10"
    );
    cy.get(
      "table[class='table table-bordered table-hover']>thead>tr>td"
    ).should("have.length", "7");
  });

  it.skip("Check cell data from specific row & Column", () => {
    cy.get(
      "table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)"
    ).contains("princytrainings4@gmail.com");
  });

  it.skip("Read all the rpws & columns data in the first page", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
      ($row, $index, $rows) => {
        // capture all the rows    // whenever use each we have to pass three parameters
        cy.wrap($row).within(() => {
          // for every row
          cy.get("td").each(($col, $index, $cols) => {
            // capturing all the columns
            cy.log($col.text());
          });
        });
      }
    );
  });

  it.only("Pagination", () => {
    // find total no of pages
    //    let totalPages;
    //  cy.get(".col-sm-6.text-end").then((el) => {
    //     let myText = el.text(); // showing 1 to 10 of 9672 (968) pages

    //     totalPages = myText.substring(myText.indexOf("(") + 1, myText.indexOf("pages") - 1);

    //     cy.log("Total number of pages in a table====>"+ totalPages);
    //  })

    let totalPages = 5;

    for (let p = 1; p <= totalPages; p++) {
      if (totalPages > 1) {
        cy.log("Active page is ===>" + p);
        cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
        cy.wait(3000);

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
          ($row, $index, $rows) => {
            cy.wrap($row).within(() => {
              cy.get("td:nth-child(3)").then((el) => {
                cy.log(el.text()); // Email
              });
            });
          }
        );
      }
    }
  });
});
