it('Home', () => {
  cy.visit('/');

  cy.url().should('include', '/home');
  cy.get('[data-cy="title"]').should('have.text', 'welcome!');
});
