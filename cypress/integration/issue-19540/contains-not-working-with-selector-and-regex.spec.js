describe('contains-not-working-with-selector-and-regex', () => {
  it('it succeeds with a get', () => {
    cy.visit('https://www.cypress.io/');
    cy.get('main .container').contains(new RegExp('^Cypress is the new standard in front-end testing that every developer and QA engineer needs.$', 'm'));
  });

  it('it succeeds with a string', () => {
    cy.visit('https://www.cypress.io/');
    cy.contains('main .container', 'Cypress is the new standard in front-end testing that every developer and QA engineer needs.');
  });

  it('it fails with a string', () => {
    cy.visit('https://www.cypress.io/');
    cy.contains('main .container', 'Derp');
  });

  it('succeeds with other regex syntax', () => {
    cy.visit('https://www.cypress.io/');
    cy.contains('main .container', /^Cypress is the new standard in front-end testing that every developer and QA engineer needs./);
  });

  it('fails with a regex', () => {
    cy.visit('https://www.cypress.io/');
    cy.contains('main .container', new RegExp('^Cypress is the new standard in front-end testing that every developer and QA engineer needs.$', 'm'));
  });
});
