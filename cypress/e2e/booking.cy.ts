describe('Booking Flow', () => {
  beforeEach(() => {
    cy.visit('/reservation');
  });

  it('completes a booking successfully', () => {
    // Fill in the booking form
    cy.get('select[name="courseType"]').select('prenatal');
    cy.get('input[name="date"]').type('2025-05-01');
    cy.get('select[name="time"]').select('morning');
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="phone"]').type('0123456789');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify success message
    cy.contains('Merci Test User pour votre réservation').should('be.visible');
  });

  it('shows validation errors', () => {
    // Submit empty form
    cy.get('button[type="submit"]').click();

    // Verify error messages
    cy.contains('Veuillez sélectionner un cours').should('be.visible');
    cy.contains('Veuillez sélectionner une date').should('be.visible');
    cy.contains('Veuillez entrer votre nom').should('be.visible');
  });
});