describe('Navigation', () => {
  it('Labels and Links', () => {
    cy.visit('/');

    cy.get(`[data-automationid="home-page"]`).should('have.text', 'Home').should('have.attr', 'href', '/home');
    cy.get(`[data-automationid="todo-page"]`).should('have.text', 'Todo list').should('have.attr', 'href', '/todo');
    cy.get(`[data-automationid="posts-page"]`).should('have.text', 'Posts').should('have.attr', 'href', '/posts');
    cy.get(`[data-automationid="gallery-page"]`).should('have.text', 'Gallery').should('have.attr', 'href', '/gallery');
    cy.get(`[data-automationid="about-page"]`).should('have.text', 'About').should('have.attr', 'href', '/about');
  });

  it.skip('Todo List', () => {
    // TODO
  });

  it.skip('Posts', () => {
    // TODO
  });

  it.skip('Gallery', () => {
    // TODO
  });

  it.skip('About Us', () => {
    // TODO
  });
});
