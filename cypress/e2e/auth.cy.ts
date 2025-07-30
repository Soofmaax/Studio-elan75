describe('Authentication Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should handle login process', () => {
    // Open login modal
    cy.contains('button', 'Connexion').click();

    // Fill login form
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('password123');

    // Submit form
    cy.get('button[type="submit"]').click();

    // Verify success message
    cy.contains('Connexion réussie').should('be.visible');
  });

  it('should handle registration process', () => {
    // Open registration modal
    cy.contains('button', 'Inscription').click();

    // Fill registration form
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('password123');

    // Submit form
    cy.get('button[type="submit"]').click();

    // Verify success message
    cy.contains('Inscription réussie').should('be.visible');
  });

  it('should handle logout process', () => {
    // Login first
    cy.login('test@example.com', 'password123');

    // Click logout button
    cy.contains('button', 'Déconnexion').click();

    // Verify logged out state
    cy.contains('button', 'Connexion').should('be.visible');
  });
});