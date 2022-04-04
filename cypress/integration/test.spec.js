describe('derp', () => {

    it('it visits the page', () => {
        cy.visit('https://www.example.com')
    });

    // it('it visits the page', () => {
    //     cy.visit('https://www.google.com')
    // });

    it.only('it visits the page', { pageLoadTimeout: 5000 }, () => {
        cy.visit('https://ycombinator.com/')
        cy.get('a')
        cy.window().then((win) => {
          win.location.href = 'https://ycombinator.com/klajsd;lfjaslkdjf'
        })

        cy.get('b')
      })

})
