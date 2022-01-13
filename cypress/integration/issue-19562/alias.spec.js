describe('contains-not-working-with-selector-and-regex', () => {
    it('test requerying alias', () => {
        // use an accessable domain to reproduce
        cy.visit('https://www.cypress.io');
        //find element and alias it
        cy.contains('Fast, easy and reliable testing for anything that runs in a browser.').as('foo');
        // verify element exists
        cy.get('@foo').should('exist');
        // visit the features page
        cy.visit('https://www.cypress.io/features/');
        // alias not found, replay cy.visit command is found.
        cy.get('@foo').should('exist');
    });

    it('his test requerying alias', () => {
        // use an accessable domain to reproduce
        cy.visit('https://www.cypress.io/');
        // accept cookies to prevent 403s
        // cy.get('#onetrust-accept-btn-handler').click();
        // this command will be tested for prev command since the **.contains()** is treated as a **child** type and **getCommandsUntilFirstParentOrValidSubject(current)** tries to find a **parent** command
        cy.url().should('equal', 'https://www.cypress.io/');
        // get an alias using **.contains()**
        cy.contains('Cypress is the new standard in front-end testing that every developer and QA engineer needs.').as('foo');
        // trigger reload for new element
        cy.get('header a[href="/features"]').click();
        // this will try to resolve the alias and crash the party
        cy.get('@foo').should('exist');
      });
})
