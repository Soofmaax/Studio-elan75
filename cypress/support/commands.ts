declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): Chainable<void>
    logout(): Chainable<void>
  }
}

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/');
  cy.contains('button', 'Connexion').click();
  cy.get('input[type="email"]').type(email);
  cy.get('input[type="password"]').type(password);
  cy.get('button[type="submit"]').click();
  cy.contains('Connexion réussie').should('be.visible');
});

Cypress.Commands.add('logout', () => {
  cy.contains('button', 'Déconnexion').click();
  cy.contains('button', 'Connexion').should('be.visible');
});

export {};