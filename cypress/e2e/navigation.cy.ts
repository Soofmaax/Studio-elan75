describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate through main menu items', () => {
    cy.get('nav').within(() => {
      cy.contains('Cours').click();
      cy.url().should('include', '/cours');

      cy.contains('Instructeurs').click();
      cy.url().should('include', '/instructeurs');

      cy.contains('Tarifs').click();
      cy.url().should('include', '/tarifs');

      cy.contains('Blog').click();
      cy.url().should('include', '/blog');

      cy.contains('Contact').click();
      cy.url().should('include', '/contact');
    });
  });

  it('should handle 404 page', () => {
    cy.visit('/non-existent-page');
    cy.contains('Page non trouvée').should('be.visible');
    cy.contains('Retour à l\'accueil').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('should navigate through footer links', () => {
    cy.get('footer').within(() => {
      cy.contains('Mentions légales').click();
      cy.url().should('include', '/mentions-legales');

      cy.contains('Politique de confidentialité').click();
      cy.url().should('include', '/politique-de-confidentialite');
    });
  });

  it('should maintain header visibility during scroll', () => {
    cy.scrollTo(0, 500);
    cy.get('header').should('be.visible');
    cy.get('header').should('have.class', 'bg-white');
  });

  it('should show scroll-to-top button on scroll', () => {
    cy.scrollTo(0, 500);
    cy.get('.scroll-to-top').should('be.visible');
    cy.get('.scroll-to-top').click();
    cy.window().its('scrollY').should('equal', 0);
  });
});