describe('issue-19644', () => {

    it('follows the 308 redirect', () => {
        const options = {
            method: "POST",
            url: "localhost:3000/308",
            // form: true,
            body: {
              junk: 'lots of junk'
            },
          };
          cy.request(options).then((response)=>{
            expect(response.body.res).to.equal('final post')
          });
    });

    it('follows the 307 redirect', () => {
        const options = {
            method: "POST",
            url: "localhost:3000/307",
            // form: true,
            body: {
              junk: 'lots of junk'
            },
          };
          cy.request(options).then((response)=>{
            expect(response.body.res).to.equal('final post')
          });
    });

    it('calls directly to final', () => {
        const options = {
            method: "POST",
            url: "localhost:3000/final",
            // form: true,
            body: {
              junk: 'lots of junk'
            },
          };
          cy.request(options).then((response)=>{
            expect(response.body.res).to.equal('final post')
          });;
    });

})
