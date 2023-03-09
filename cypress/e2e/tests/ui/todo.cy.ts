const S = {
  textInput: '[data-cy="todo-text"]',
  addTodoBtn: '[data-cy="add-btn"]',
  todoItem: '[data-cy="todo-item"]',
};

describe('Todo List', () => {
  it('Add items', () => {
    cy.visit('/todo');

    cy.get(S.textInput).type('item 1');
    cy.get(S.addTodoBtn).click();

    cy.get(S.textInput).type('item 2');
    cy.get(S.addTodoBtn).click();

    cy.get(S.todoItem).should('have.length', 2);
  });
});
