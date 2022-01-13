// import {
//     getSupportedInputTypes,
//   } from '@angular/cdk/platform';
import { isPlatformBrowser } from '@angular/common';

  describe('My First Test', () => {
    // just a test
    // const types = getSupportedInputTypes();

    it('Visits the initial project page', () => {
      cy.visit('/')
      cy.contains('Welcome')
    })
  })
